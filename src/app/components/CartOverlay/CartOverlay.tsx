"use client";

import { useAppSelector, useAppDispatch } from "@/app/redux/store";
import { removeFromCart } from "@/app/redux/cartSlice";
import Image from "next/image";
import { useState, useEffect } from "react";
import "@/app/components/CartOverlay/CartOverlay.scss";

interface CartOverlayProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

export default function CartOverlay({ isOpen, setIsOpen }: CartOverlayProps) {
  const cartItems = useAppSelector((state) => state.cart.items);
  const dispatch = useAppDispatch();
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <>
      {isOpen && (
        <div className="overlay-background" onClick={() => setIsOpen(false)} />
      )}

      <div className={`cart-overlay ${isOpen ? "open" : ""}`}>
        <div className="cart-header">
          <button onClick={() => setIsOpen(false)}>
            <Image
              src="/img/Arrow-Left-icon.svg"
              alt="Arrow Icon"
              height={33}
              width={33}
            />
          </button>
          <h2>Mochila de Compras</h2>
        </div>

        {cartItems.length === 0 ? (
          <p className="empty-cart">Seu carrinho está vazio.</p>
        ) : (
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={60}
                  height={60}
                />
                <div className="cart-info">
                  <h4>{item.name}</h4>
                  <div className="price-container">
                    <Image
                      src="/img/eth-icon.svg"
                      alt="ETH Icon"
                      height={29}
                      width={29}
                    />
                    <p>{item.price} ETH</p>
                  </div>
                </div>
                <button
                  className="trash-icon"
                  onClick={() => dispatch(removeFromCart(item.id))}
                >
                  <Image
                    src="/img/Trash-icon.svg"
                    alt="Trash Icon"
                    height={22}
                    width={22}
                  />
                </button>
              </div>
            ))}
          </div>
        )}

        <div className="cart-footer">
          <h3>
            TOTAL:
            <div className="cart-footer-price">
              <Image
                src="/img/eth-icon.svg"
                alt="ETH Icon"
                height={34}
                width={34}
              />{" "}
              {totalPrice} ETH
            </div>
          </h3>
          <button className="checkout-button">Finalizar Compra</button>
        </div>
      </div>
    </>
  );
}
