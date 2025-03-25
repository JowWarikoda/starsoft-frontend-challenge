export async function fetchNFTs() {
  const response = await fetch(
    "https://starsoft-challenge-7dfd4a56a575.herokuapp.com/v1/products"
  );

  if (!response.ok) {
    throw new Error("Erro ao buscar NFTs");
  }

  const data = await response.json();
  return data.data;
}
