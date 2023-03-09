import { Typography, Grid, Container, Box } from "@mui/material";
import { NFT, getNfts } from "../../api/api";

import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import ProductDisplay from "./ProductDisplay";
import ProductModal from "./ProductModal";
import ProductForm from "./ProductForm";

const ProductsGrid = () => {
  
  const [ownerAddress, setOwnerAddress] = useState<string>('');

  const [selectedProduct, setSelectedProduct] = useState<NFT>();

  const [open, setOpen] = useState(false);
  const handleOpen = (nft: NFT) => {
    setOpen(true);
    setSelectedProduct(nft);
  };
  const handleClose = () => setOpen(false);

  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["getNfts", ownerAddress],
    queryFn: () => getNfts(ownerAddress),
  });

  if (isLoading) return <Typography> Loading... </Typography>;

  if (error) return <Typography> An error has occurred</Typography>;

  const renderProductWithModal = (nft: NFT) => {
    return (
      <Box onClick={() => handleOpen(nft)}>
        <ProductDisplay product={nft} />
      </Box>
    );
  };

  const handleSearch = (data: any) => {
    setOwnerAddress(data.address);
  }

  return (
    <>
      <Container maxWidth="xl">
        <ProductModal product={selectedProduct} open={open} onClose={handleClose} />
        <ProductForm onSubmit={handleSearch} />
        <Grid container spacing={3}>
          {data &&
            data.length > 0 &&
            data.map((nft: NFT) => (
              <Grid key={nft.id} item xs={12} sm={6} md={4} lg={4} xl={3}>
                {renderProductWithModal(nft)}
              </Grid>
            ))}
            {
              data && data.length === 0 && <Typography> No results found! </Typography>
            }
        </Grid>
      </Container>
    </>
  );
};

export default ProductsGrid;