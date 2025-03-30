import Marketplace from "@/app/components/Marketplace/Marketplace";
import { fetchNFTs } from "@/services/api";

export default async function Home() {
  const nfts = await fetchNFTs(); // Pega os NFTs no servidor

  return (
    <main>
      <Marketplace initialNFTs={nfts.slice(0, 8)} allNFTs={nfts.slice(0, 32)} />
    </main>
  );
}
