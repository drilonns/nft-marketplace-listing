import {
  AppBar,
  Box,
  Grid,
  Toolbar,
  Typography,
} from "@mui/material";
import ProductsGrid from "./features/product/ProductGrid";
import {
  QueryClient,
  QueryClientProvider
} from "@tanstack/react-query";

const queryClient = new QueryClient();

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              NFT Marketplace
            </Typography>
          </Toolbar>
        </AppBar>
        <Grid spacing={3} paddingY={'50px'}>
          <Grid item xs={12}>
            <ProductsGrid />
          </Grid>
        </Grid>
      </Box>
    </QueryClientProvider>
  );
};
