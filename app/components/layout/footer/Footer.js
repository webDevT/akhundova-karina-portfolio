import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.scss";
import { footer as footerData, header } from "@/data";

function UpworkIcon() {
  return (
    <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.4673 8.0588C14.5475 8.0588 13.6856 7.66936 12.9025 7.03539L13.0932 6.14044L13.1015 6.10727C13.2713 5.15439 13.8099 3.55495 15.4673 3.55495C16.7102 3.55495 17.7213 4.56597 17.7213 5.80892C17.7171 7.04777 16.7062 8.0588 15.4673 8.0588ZM15.4673 1.27202C13.35 1.27202 11.7093 2.64761 11.0423 4.90987C10.023 3.38095 9.25225 1.5455 8.80068 0H6.52184V5.92908C6.52184 7.09752 5.56885 8.0504 4.40041 8.0504C3.23197 8.0504 2.27909 7.09752 2.27909 5.92908V0H2.59889e-05V5.92908C-0.00826473 8.35715 1.96813 10.35 4.3961 10.35C6.82417 10.35 8.80057 8.35715 8.80057 5.92908V4.93475C9.24384 5.85866 9.78661 6.79087 10.4454 7.61961L9.04907 14.1825H11.3819L12.3928 9.4219C13.2794 9.98954 14.2988 10.3459 15.4672 10.3459C17.9656 10.3459 20 8.29912 20 5.80063C20 3.30634 17.9657 1.27202 15.4673 1.27202Z" fill="#222222"/>
</svg>

  );
}

function GitHubIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function SocialIcon({ type }) {
  switch (type) {
    case "upwork":
      return <UpworkIcon />;
    case "github":
      return <GitHubIcon />;
    case "linkedin":
      return <LinkedInIcon />;
    default:
      return null;
  }
}

export default function Footer() {
  const { logo, social } = footerData;
  const navLinks = header.navLinks;

  return (
    <footer className={styles.footer}>
   
      <div className={`container ${styles.container}`}>
        <Link href="/" className={styles.logo}>
          <Image src={logo.src} alt={logo.alt} width={logo.width} height={logo.height} />
        </Link>
        <nav className={styles.nav} aria-label="Footer navigation">
          {navLinks.map((item) => (
            <Link key={item.href} href={item.href} className={styles.navLink}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className={styles.social}>
          {social.map((item) => (
            <a
              key={item.type}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label={item.ariaLabel}
            >
              <span className={styles.socialIconWrap}>
                <SocialIcon type={item.type} />
              </span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
