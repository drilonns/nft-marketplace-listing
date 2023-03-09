import {
  FormControl,
  InputLabel,
  OutlinedInput,
  Button,
  Grid,
} from "@mui/material";

import { useForm } from "react-hook-form";

const ProductForm = ({ onSubmit }: { onSubmit: (data: any) => void }) => {
  const { register, handleSubmit } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid
        container
        maxWidth={"sm"}
        spacing={3}
        justifyContent="center"
        style={{ margin: "0 auto", paddingBottom: '50px' }}
      >
        <Grid item xs={12} sm={8} md={8} lg={10}>
          <FormControl fullWidth>
            <InputLabel htmlFor="address">Search with owner address</InputLabel>
            <OutlinedInput
              id="address"
              label="Search with owner address"
              {...register("address")}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={4} md={4} lg={2}>
          <Button
            style={{ margin: "0 auto", height: "100%" }}
            type="submit"
            variant="outlined"
          >
            Search
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default ProductForm;
