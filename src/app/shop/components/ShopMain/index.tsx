import { Grid } from '@mui/material';
import ProductCard from 'app/shop/components/ProductCard';

export default function ShopMain() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <ProductCard />
      </Grid>
      <Grid item xs={4}>
        <ProductCard />
      </Grid>
      <Grid item xs={4}>
        <ProductCard />
      </Grid>
    </Grid>
  );
}
