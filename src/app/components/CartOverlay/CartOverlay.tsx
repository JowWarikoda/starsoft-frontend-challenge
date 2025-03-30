"use client";

import { useAppSelector, useAppDispatch } from "@/app/redux/store";
import { removeFromCart } from "@/app/redux/cartSlice";
import Image from "next/image";
import { useState, useEffect } from "react";
import "@/app/components/CartOverlay/CartOverlay.scss";

export default function CartOverlay() {
  const cartItems = useAppSelector((state) => state.cart.items);
  const dispatch = useAppDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null; // Evita Hydration Mismatch

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <>
      <button className="cart-button" onClick={() => setIsOpen(!isOpen)}>
        <Image
          src="/img/shopcart-icon.svg"
          alt="Shop Cart Icon"
          width={33}
          height={33}
        />
      </button>

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
                <button onClick={() => dispatch(removeFromCart(item.id))}>
                  <Image
                    src="/img/Trash-icon.svg"
                    alt="Trash Icon"
                    height={43}
                    width={43}
                  />
                </button>
              </div>
            ))}
          </div>
        )}

        <div className="cart-footer">
          <h3>
            TOTAL:
            <Image
              src="/img/eth-icon.svg"
              alt="ETH Icon"
              height={34}
              width={34}
            />{" "}
            {totalPrice} ETH
          </h3>
          <button className="checkout-button">Finalizar Compra</button>
        </div>
      </div>
    </>
  );
}
