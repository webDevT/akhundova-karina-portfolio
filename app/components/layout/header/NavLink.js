"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./header.module.scss";

export default function NavLink({ href, children, onClick }) {
  const pathname = usePathname();
  const isActive = pathname === href || pathname.startsWith(`${href}/`);
  // На сторінках поза головною якорі (#about, #services) вести на головну з якорем
  const resolvedHref =
    pathname !== "/" && href.startsWith("#") ? `/${href}` : href;

  return (
    <Link
      href={resolvedHref}
      className={`${styles.headerMenuLink}${isActive ? ` ${styles.active}` : ""}`}
      onClick={onClick}
    >
      <span>{children}</span>
    </Link>
  );
}
