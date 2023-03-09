import { Typography, Grid, Box } from "@mui/material";
import { NFT } from "../../api/api";

const ProductDisplay = ({ product }: { product: NFT }) => {
  const style = {
    boxShadow: "rgb(0 0 0 / 8%) 0px 4px 15px",
    color: "#222",
    float: "left",
    overflow: "hidden",
    borderRadius: "10px",
    cursor: 'pointer',
    transition: '0.3s ease-in-out',
    "&:hover": {
      boxShadow: "rgb(0 0 0 / 28%) 0px 4px 15px",
      transition: '0.3s ease-in-out'
    },
  };

  return (
    <Grid sx={style}>
      <Grid>
        <img
          src={product.thumbnail}
          srcSet={product.thumbnail}
          alt={product.title}
          loading="lazy"
          style={{
            objectFit: "cover",
            maxWidth: "350px",
            maxHeight: "250px",
            minHeight: "250px",
            minWidth: "350px",
            width: "100%",
            objectPosition: "center",
            overflow: "hidden",
          }}
        />
      </Grid>
      <Box padding={"24px"} width={"100%"} style={{ float: "left" }}>
        <Box style={{ textAlign: "left" }}>
          <Typography variant="caption" fontWeight={900}>
            {product.title}
          </Typography>
        </Box>
        <Box>
          <Typography variant="h5">
            {product.price} {product.currency}
          </Typography>
        </Box>
      </Box>
    </Grid>
  );
};

export default ProductDisplay;
