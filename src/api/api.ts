import NFTLIST from "./data/products.json";

export type NFT = {
  id: number;
  title: string;
  description: string;
  price: number;
  last_sale: number;
  currency: string;
  url: string;
  ownerAddress: string;
  thumbnail: string;
};

let data = NFTLIST;

export const getNfts = (ownerAddress: string | undefined): Promise<NFT[]> => {
  if (ownerAddress) {
    const filteredProducts = data.nfts.filter(
      (nft) => nft.ownerAddress === ownerAddress
    );
    return new Promise((res) =>
      setTimeout(() => res(filteredProducts), Math.random() * 200)
    );
  } else {
    return new Promise((res) =>
      setTimeout(() => res(data.nfts), Math.random() * 200)
    );
  }
};
