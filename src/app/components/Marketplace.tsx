import { useQuery } from "@tanstack/react-query";
import { fetchNFTs } from "@/services/api";
import CardNFT from "@/app/components/CardNFT";

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

  if (!Array.isArray(nfts)) return <p>Erro: Dados inválidos</p>;

  return (
    <div className="grid">
      {nfts.map((nft) => (
        <CardNFT key={nft.id} nft={nft} />
      ))}
    </div>
  );
}
