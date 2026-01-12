"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import styles from "./header.module.scss";

export default function NavLink({ href, children, onClick }) {
  const pathname = usePathname();
  const isActive = pathname === href || pathname.startsWith(`${href}/`);

  return (
    <Link 
      href={href} 
      className={`${styles.headerMenuLink}${isActive ? ` ${styles.active}` : ''}`}
      onClick={onClick}
    >
      <span>{children}</span>

    </Link>
  );
}
