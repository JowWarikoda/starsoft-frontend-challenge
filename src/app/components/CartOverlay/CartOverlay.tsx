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
          <button
            className="cart-header-arrow-icon"
            onClick={() => setIsOpen(false)}
          >
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
                  width={139}
                  height={139}
                />
                <div className="cart-info">
                  <div className="cart-item-info-container">
                    <p className="cart-item-name">{item.name}</p>
                    <p className="cart-item-description">{item.description}</p>
                  </div>
                  <div className="price-container">
                    <Image
                      src="/img/eth-icon.svg"
                      alt="ETH Icon"
                      height={29}
                      width={29}
                    />
                    <p>{item.price} ETH</p>
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
              </div>
            ))}
          </div>
        )}

        <div className="cart-footer">
          <div className="cart-footer-total">
            <span className="total-text">TOTAL:</span>
            <div className="cart-footer-price">
              <Image
                src="/img/eth-icon.svg"
                alt="ETH Icon"
                height={34}
                width={34}
              />{" "}
              <span className="total-price">{totalPrice} ETH </span>
            </div>
          </div>
          <button className="checkout-button">Finalizar Compra</button>
        </div>
      </div>
    </>
  );
}
