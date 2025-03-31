"use client";

import "@/app/components/Header/Header.scss";
import Image from "next/image";
import { useState } from "react";
import CartOverlay from "@/app/components/CartOverlay/CartOverlay";
import { useAppSelector } from "@/app/redux/store";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const cartItems = useAppSelector((state) => state.cart.items);
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0); // Soma total dos itens do

  return (
    <header className="header">
      <a href="./">
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
        <span className="cart-count-text">{totalItems}</span>
      </button>

      <CartOverlay isOpen={isOpen} setIsOpen={setIsOpen} />
    </header>
  );
}
