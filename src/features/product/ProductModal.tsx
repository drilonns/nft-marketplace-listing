import { Typography, Box, Modal, Link } from "@mui/material";
import { NFT } from "../../api/api";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const ProductModal = ({
  open,
  onClose,
  product,
}: {
  open: boolean;
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
  product: NFT | undefined;
}) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={style}>
        <Box sx={{ m: "0 auto", width: "fit-content" }}>
          <img
            src={product?.thumbnail}
            srcSet={product?.thumbnail}
            alt={product?.title}
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
        </Box>

        <Typography variant="h6" component="h2" sx={{ mt: 4 }}>
          {product?.title}
        </Typography>
        <Typography sx={{ mt: 2 }}>{product?.description}</Typography>
        <Typography fontWeight={700} sx={{ mt: 2, color: "#333" }}>
          Current price: {product?.price} {product?.currency}
        </Typography>
        <Typography sx={{ mt: 2, opacity: "0.6" }}>
          Last sale: {product?.last_sale} {product?.currency}
        </Typography>

        <Box sx={{ mt: 4, textAlign: 'center' }}>
          <Link
            target="_blank"
            rel="noopener"
            href={product?.url}
            underline="none"
            variant="button"
            sx={{
                backgroundColor: "#1976d2",
                color: "#fff",
                padding: "16px 24px",
                fontSize: "16px",
                borderRadius: "10px",
            }}
          >
            Purchase Now
          </Link>
        </Box>
      </Box>
    </Modal>
  );
};

export default ProductModal;
