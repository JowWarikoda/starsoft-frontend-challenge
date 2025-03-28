"use client";

import { useAppSelector, useAppDispatch } from "@/app/redux/store";
import { removeFromCart } from "@/app/redux/cartSlice";
import Image from "next/image";
import { useState } from "react";
import styles from "@/app/styles/Cart.module.css";

export default function CartOverlay() {
  const cartItems = useAppSelector((state) => state.cart.items);
  const dispatch = useAppDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <>
      {/* Botão para abrir o carrinho */}
      <button className={styles.cartButton} onClick={() => setIsOpen(!isOpen)}>
        <Image
          src={"/img/shopcart-icon.svg"}
          alt="Shop Cart Icon"
          width={33}
          height={33}
        ></Image>
      </button>

      {isOpen && (
        <div
          className={styles.overlayBackground}
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Overlay do Carrinho */}
      <div className={`${styles.cartOverlay} ${isOpen ? styles.open : ""}`}>
        <div className={styles.cartHeader}>
          <button onClick={() => setIsOpen(false)}>
            <Image
              src={"/img/Arrow-Left-icon.svg"}
              alt="Arrow Icon"
              height={33}
              width={33}
            />
          </button>
          <h2>Mochila de Compras</h2>
        </div>

        {cartItems.length === 0 ? (
          <p>Seu carrinho está vazio.</p>
        ) : (
          <div className={styles.cartItems}>
            {cartItems.map((item) => (
              <div key={item.id} className={styles.cartItem}>
                <Image
                  src={item.image}
                  alt={item.name}
                  width={60}
                  height={60}
                />
                <div className={styles.cartInfo}>
                  <h4>{item.name}</h4>

                  <div className={styles.priceContainer}>
                    <Image
                      src={"/img/eth-icon.svg"}
                      alt="ETH Icon"
                      height={29}
                      width={29}
                    />
                    <p>{item.price} ETH</p>
                  </div>
                </div>
                <button onClick={() => dispatch(removeFromCart(item.id))}>
                  <Image
                    src={"/img/Trash-icon.svg"}
                    alt="Arrow Icon"
                    height={43}
                    width={43}
                  />
                </button>
              </div>
            ))}
          </div>
        )}

        <div className={styles.cartFooter}>
          <h3>
            TOTAL:
            <Image
              src={"/img/eth-icon.svg"}
              alt="ETH Icon"
              height={34}
              width={34}
            />{" "}
            {totalPrice} ETH
          </h3>
          <button className={styles.checkoutButton}>Finalizar Compra</button>
        </div>
      </div>
    </>
  );
}
