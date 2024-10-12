import { Grid } from '@mui/material';
import {
  ProductImageDisplay,
  ProductOverview,
  ProductDetailTabs,
} from './components';
import BunXiDau from 'statics/images/bun-xi-dau.jpg';
import BanhHong from 'statics/images/banh-hong.jpg';

export default async function ProductDetail() {
  return (
    <div className="max-w-[1184px] w-full mt-8">
      <Grid container spacing={2} className="mb-4 sm:mb-8">
        <Grid item xs={12} sm={6}>
          <ProductImageDisplay productImages={FAKE} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <ProductOverview className={''} />
        </Grid>
      </Grid>

      <ProductDetailTabs />
    </div>
  );
}

const FAKE = [
  {
    id: 1,
    link: BunXiDau,
  },
  {
    id: 2,
    link: BanhHong,
  },
  {
    id: 1,
    link: BunXiDau,
  },
  {
    id: 2,
    link: BanhHong,
  },
  {
    id: 1,
    link: BunXiDau,
  },
  {
    id: 2,
    link: BanhHong,
  },
];
