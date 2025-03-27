"use client";

import { useState } from "react";
import CardNFT from "@/app/components/CardNFT";

interface NFT {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

interface MarketplaceProps {
  initialNFTs: NFT[];
  allNFTs: NFT[]; // Todos os NFTs disponíveis (até 32)
}

export default function Marketplace({
  initialNFTs,
  allNFTs,
}: MarketplaceProps) {
  const [nfts, setNfts] = useState<NFT[]>(initialNFTs);
  const [visibleCount, setVisibleCount] = useState(8);

  const handleLoadMore = () => {
    const newCount = visibleCount + 8;
    setNfts(allNFTs.slice(0, newCount));
    setVisibleCount(newCount);
  };

  return (
    <div>
      <div className="grid">
        {nfts.map((nft) => (
          <CardNFT key={nft.id} nft={nft} />
        ))}
      </div>

      {visibleCount < allNFTs.length && (
        <button onClick={handleLoadMore}>Carregar Mais</button>
      )}
    </div>
  );
}
