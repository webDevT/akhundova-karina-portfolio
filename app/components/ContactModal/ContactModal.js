"use client";

import { useState, useCallback, useEffect } from "react";
import styles from "./ContactModal.module.scss";
import { contact } from "@/data";
import { useContactModal } from "./ContactModalContext";

export default function ContactModal() {
  const { isOpen, close } = useContactModal();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [errorMessage, setErrorMessage] = useState("");

  const resetForm = useCallback(() => {
    setName("");
    setEmail("");
    setMessage("");
    setStatus("idle");
    setErrorMessage("");
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setStatus("error");
        setErrorMessage(data.error || contact.form.error);
        return;
      }
      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMessage(contact.form.error);
    }
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
            <h2 id="contact-modal-title" className={styles.title}>
              {form.title}
            </h2>
            <form onSubmit={handleSubmit} className={styles.form} noValidate>
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={form.namePlaceholder}
                className={styles.input}
                required
                disabled={status === "sending"}
                autoComplete="name"
              />
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={form.emailPlaceholder}
                className={styles.input}
                required
                disabled={status === "sending"}
                autoComplete="email"
              />
              <textarea
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={form.messagePlaceholder}
                className={styles.textarea}
                rows={5}
                required
                disabled={status === "sending"}
              />
              {status === "error" && (
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
