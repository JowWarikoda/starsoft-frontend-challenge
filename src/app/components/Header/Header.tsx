"use client";

import "@/app/components/Header/Header.scss";
import Image from "next/image";
import { useState } from "react";
import CartOverlay from "@/app/components/CartOverlay/CartOverlay";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <a href="./" className="logo-header">
        <Image
          src="/img/starsoft-logo.svg"
          alt="StarSoft Logo"
          width={101}
          height={38}
          priority
        />
      </a>

      <button className="cart-button" onClick={() => setIsOpen(!isOpen)}>
        <Image
          src="/img/shopcart-icon.svg"
          alt="Shop Cart Icon"
          width={33}
          height={33}
        />
      </button>

      <CartOverlay isOpen={isOpen} setIsOpen={setIsOpen} />
    </header>
  );
}
