"use client";
import { useState } from "react";

export default function CartOverlay() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)}>🛒</button>
      {isOpen && (
        <div className="overlay">
          <h2>Mochila de Compras</h2>
          {/* Itens do carrinho puxar da API depois*/}
          <button onClick={() => setIsOpen(false)}>
            <svg
              width="34"
              height="34"
              viewBox="0 0 34 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.23633 17.3813H27.0697"
                stroke="#FF8310"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14.6389 25.7484L6.23608 17.3817L14.6389 9.01367"
                stroke="#FF8310"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      )}
    </>
  );
}
