"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchNFTs } from "@/services/api";
import Image from "next/image";

export default function Marketplace() {
  const {
    data: nfts,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["nfts"],
    queryFn: fetchNFTs,
  });

  if (isLoading) return <p>Carregando NFTs...</p>;
  if (error) return <p>Erro: {error.message}</p>;

  // Verifica se 'nfts' é um array válido antes de tentar mapear
  if (!Array.isArray(nfts)) return <p>Erro: Dados inválidos</p>;

  return (
    <div className="grid">
      {nfts?.map((nft) => (
        <div key={nft.id} className="nft-card">
          <Image src={nft.image} alt={nft.name} width={289} height={258} />
          <h3>{nft.name}</h3>
          <p>{nft.description}</p>
          <h4>{nft.price} ETH</h4>
        </div>
      ))}
    </div>
  );
}
