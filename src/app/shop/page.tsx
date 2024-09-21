import { Grid } from '@mui/material';
import ProductFilter from 'app/shop/components/ProductFilter';
import ShopMain from 'app/shop/components/ShopMain';
import ShopSidebar from 'app/shop/components/ShopSidebar';

export default async function Shop() {
  return (
    <div className="max-w-[1184px] w-full">
      <ProductFilter className="mt-8 mb-4" />

      <Grid container spacing={2} className="">
        <Grid item xs={12} sm={3} className={'hidden sm:block'}>
          <ShopSidebar />
        </Grid>
        <Grid item xs={12} sm={9}>
          <ShopMain />
        </Grid>
      </Grid>
    </div>
  );
}
