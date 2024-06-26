﻿import { Grid } from '@mui/material';
import Banner from 'app/components/Banner';
import ProductFilter from 'app/shop/components/ProductFilter';
import ShopMain from 'app/shop/components/ShopMain';
import ShopSidebar from 'app/shop/components/ShopSidebar';
import StoreImage from 'statics/images/marketplace-icon.webp';

export default async function Shop() {
  return (
    <div className="max-w-[1184px] w-full">
      <Banner
        image={StoreImage}
        title="Marketplace"
        subTitle="The best place for the community to buy and sell!"
      />

      <ProductFilter className="mt-8 mb-4" />

      <Grid container spacing={2} className="">
        <Grid item xs={3}>
          <ShopSidebar />
        </Grid>
        <Grid item xs={9}>
          <ShopMain />
        </Grid>
      </Grid>
    </div>
  );
}
