"use client";

import { useState } from "react";
import { useAppDispatch } from "@/app/redux/store";
import { addToCart } from "@/app/redux/cartSlice";
import Image from "next/image";
import "@/app/components/CardNFT/CardNFT.scss";

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

  // Estado para controlar o texto do botão
  const [buttonText, setButtonText] = useState("Comprar");

  const handleAddToCart = () => {
    dispatch(addToCart(nft));
    setButtonText("Adicionado ao Carrinho");
  };

  return (
    <div className="product-card">
      <div className="product-image">
        <Image
          src={nft.image}
          alt={nft.name}
          width={289}
          height={258}
          className="API-image"
          priority
        />
      </div>
      <div className="product-info-container">
        {/* Nome e Descrição */}
        <div className="product-info">
          <h3>{nft.name}</h3>
          <p>{nft.description}</p>
        </div>

        {/* Preço */}
        <div className="product-price">
          <Image
            src="/img/eth-icon.svg"
            alt="ETH Icon"
            width={24}
            height={24}
          />
          <span>{nft.price} ETH</span>
        </div>

        <button className="buy-button" onClick={handleAddToCart}>
          <p className="buy-button-text">{buttonText}</p>
        </button>
      </div>
    </div>
  );
}
