"use client";

import { useState } from "react";
import CardNFT from "@/app/components/CardNFT/CardNFT";
import "@/app/components/Marketplace/Marketplace.scss";

interface NFT {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

interface MarketplaceProps {
  initialNFTs: NFT[];
  allNFTs: NFT[];
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
      <div className="marketplace-container">
        {nfts.map((nft) => (
          <CardNFT key={nft.id} nft={nft} />
        ))}
      </div>

      <button
        className="loadMore-button"
        onClick={handleLoadMore}
        disabled={visibleCount >= allNFTs.length}
      >
        <p className="loadMore-text">
          {visibleCount >= allNFTs.length
            ? "Você já viu tudo"
            : "Carregar mais"}
        </p>
      </button>
    </div>
  );
}
