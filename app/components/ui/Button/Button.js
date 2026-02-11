"use client";

import Image from "next/image";
import Link from "next/link";
import { forwardRef } from "react";
import styles from "./Button.module.scss";

const ARROW_SRC = "/images/arrow-top.svg";

/**
 * Кнопка в стилі CTA: біла або темна.
 * @param {Object} props
 * @param {"white"|"dark"} [props.variant="dark"] — біла (світлий фон) або темна (темний фон)
 * @param {string} [props.href] — якщо задано, рендериться як Next.js Link
 * @param {React.ReactNode} props.children — текст кнопки
 * @param {boolean} [props.showArrow=false] — показувати стрілку справа
 * @param {string} [props.className] — додаткові класи
 * @param {string} [props.ariaLabel] — для доступності (рекомендовано для кнопок без тексту)
 */
const Button = forwardRef(function Button(
  {
    variant = "dark",
    href,
    children,
    showArrow = false,
    className = "",
    ariaLabel,
    type = "button",
    ...rest
  },
  ref
) {
  const variantClass = variant === "white" ? styles.buttonWhite : styles.buttonDark;
  const classNames = [styles.button, variantClass, className].filter(Boolean).join(" ");

  const content = (
    <>
      {children}
      {showArrow && (
        <Image
          src={ARROW_SRC}
          alt=""
          width={20}
          height={20}
          className={styles.buttonArrow}
          aria-hidden
        />
      )}
    </>
  );

  if (href) {
    return (
      <Link
        ref={ref}
        href={href}
        className={classNames}
        aria-label={ariaLabel}
        {...rest}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      ref={ref}
      type={type}
      className={classNames}
      aria-label={ariaLabel}
      {...rest}
    >
      {content}
    </button>
  );
});

export default Button;
