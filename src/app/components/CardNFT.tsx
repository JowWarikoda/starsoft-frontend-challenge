"use client";

import { useAppDispatch } from "@/app/redux/store";
import { addToCart } from "@/app/redux/cartSlice";
import Image from "next/image";
import styles from "@/app/styles/CardNFT.module.css";

interface NFT {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

interface NFTCardProps {
  nft: NFT;
}

export default function CardNFT({ nft }: NFTCardProps) {
  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(nft));
  };

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Image
          src={nft.image}
          alt={nft.name}
          width={289}
          height={258}
          className={styles.image}
          priority
        />
      </div>

      {/* Nome e Descricao */}
      <h4 className={styles.name}>{nft.name}</h4>
      <p className={styles.description}>{nft.description}</p>

      {/* Preco */}
      <div className={styles.priceContainer}>
        <span className={styles.price}>
          <img src="/img/eth-icon.svg" alt="ETH Icon" />
          {nft.price} ETH
        </span>
      </div>

      <button className={styles.buyButton} onClick={handleAddToCart}>
        Comprar
      </button>
    </div>
  );
}
