"use client";

import { ContactModalProvider as Provider } from "./ContactModalContext";
import ContactModal from "./ContactModal";

export default function ContactModalProvider({ children }) {
  return (
    <Provider>
      {children}
      <ContactModal />
    </Provider>
  );
}
