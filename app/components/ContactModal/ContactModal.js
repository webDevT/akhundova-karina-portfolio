"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import styles from "./ContactModal.module.scss";
import { contact } from "@/data";
import { useContactModal } from "./ContactModalContext";

export default function ContactModal() {
  const { isOpen, close } = useContactModal();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [errorMessage, setErrorMessage] = useState(""); // API / general error
  const [fieldErrors, setFieldErrors] = useState({ name: "", email: "", message: "" });

  const resetForm = useCallback(() => {
    setName("");
    setEmail("");
    setMessage("");
    setStatus("idle");
    setErrorMessage("");
    setFieldErrors({ name: "", email: "", message: "" });
  }, []);

  const handleClose = useCallback(() => {
    close();
    setTimeout(resetForm, 300);
  }, [close, resetForm]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) handleClose();
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") handleClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen, handleClose]);

  const isValidEmail = (value) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test((value || "").trim());

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    const v = contact.form.validation || {};

    const nameErr = !name.trim() ? (v.nameRequired || "Name is required.") : "";
    const emailEmpty = !email.trim();
    const emailErr = emailEmpty
      ? (v.emailRequired || "Email is required.")
      : !isValidEmail(email)
        ? (v.emailInvalid || "Please enter a valid email.")
        : "";
    const messageErr = !message.trim() ? (v.messageRequired || "Message is required.") : "";

    const errors = { name: nameErr, email: emailErr, message: messageErr };
    setFieldErrors(errors);

    if (nameErr || emailErr || messageErr) {
      setStatus("error");
      return;
    }

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: trimmedName, email: trimmedEmail, message: trimmedMessage }),
      });
      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setStatus("error");
        setErrorMessage(data.error || contact.form.error);
        setFieldErrors({ name: "", email: "", message: "" });
        return;
      }
      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMessage(contact.form.error);
      setFieldErrors({ name: "", email: "", message: "" });
    }
  };

  const clearFieldError = (field) => {
    setFieldErrors((prev) => ({ ...prev, [field]: "" }));
  };

  if (!isOpen) return null;

  const form = contact.form;

  return (
    <div
      className={styles.overlay}
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
    >
      <div className={styles.modal}>
        <button
          type="button"
          className={styles.closeButton}
          onClick={handleClose}
          aria-label={form.close}
        >
          ×
        </button>

        {status === "success" ? (
          <div className={styles.success}>
            <div className={styles.successIcon} aria-hidden>
              <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="28" cy="28" r="28" fill="#222222" fillOpacity="0.06" />
                <path d="M20 28l6 6 10-12" stroke="#222222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <p className={styles.successText}>{form.success}</p>
            <button
              type="button"
              className={styles.submitButton}
              onClick={handleClose}
            >
              {form.close}
            </button>
          </div>
        ) : (
          <>
            <div className={styles.titleRow}>
              {form.photo?.src && (
                <span className={styles.avatarWrap}>
                  <Image
                    src={form.photo.src}
                    alt={form.photo.alt || ""}
                    width={60}
                    height={60}
                    className={styles.photo}
                  />
                  <span className={styles.onlineDot} aria-hidden />
                </span>
              )}
              <h2 id="contact-modal-title" className={styles.title}>
                {form.title}
              </h2>
            </div>
            <form onSubmit={handleSubmit} className={styles.form} noValidate>
              <div className={styles.field}>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    clearFieldError("name");
                  }}
                  placeholder={form.namePlaceholder}
                  className={styles.input}
                  required
                  disabled={status === "sending"}
                  autoComplete="name"
                  aria-invalid={!!fieldErrors.name}
                  aria-describedby={fieldErrors.name ? "name-error" : undefined}
                />
                {fieldErrors.name && (
                  <p id="name-error" className={styles.fieldError} role="alert">
                    {fieldErrors.name}
                  </p>
                )}
              </div>
              <div className={styles.field}>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    clearFieldError("email");
                  }}
                  placeholder={form.emailPlaceholder}
                  className={styles.input}
                  required
                  disabled={status === "sending"}
                  autoComplete="email"
                  aria-invalid={!!fieldErrors.email}
                  aria-describedby={fieldErrors.email ? "email-error" : undefined}
                />
                {fieldErrors.email && (
                  <p id="email-error" className={styles.fieldError} role="alert">
                    {fieldErrors.email}
                  </p>
                )}
              </div>
              <div className={styles.field}>
                <textarea
                  name="message"
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                    clearFieldError("message");
                  }}
                  placeholder={form.messagePlaceholder}
                  className={styles.textarea}
                  rows={5}
                  required
                  disabled={status === "sending"}
                  aria-invalid={!!fieldErrors.message}
                  aria-describedby={fieldErrors.message ? "message-error" : undefined}
                />
                {fieldErrors.message && (
                  <p id="message-error" className={styles.fieldError} role="alert">
                    {fieldErrors.message}
                  </p>
                )}
              </div>
              {errorMessage && (
                <p className={styles.errorText} role="alert">
                  {errorMessage}
                </p>
              )}
              <button
                type="submit"
                className={styles.submitButton}
                disabled={status === "sending"}
              >
                {status === "sending" ? "..." : form.submit}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
