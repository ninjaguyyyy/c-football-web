import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import styles from './index.module.scss';
import BunXiDau from 'statics/images/bun-xi-dau.jpg';
import Image from 'next/image';
import Link from 'next/link';

export default function ProductCard() {
  return (
    <Card className={`${styles.container}`}>
      <div className={'w-full h-[180px] relative'}>
        <Link href="/shop/a">
          <Image src={BunXiDau} alt={'bun-xi-dau'} layout={'fill'} />
        </Link>
      </div>
      <CardContent className={'!py-[24px] !px-[24px] relative'}>
        <p className={'price'}>
          250 <span className={'text-lightblue'}>đ</span>
        </p>
        <p className="text-[18px] font-bold text-dark my-0">Bun thit nuong</p>
        <Typography
          variant="body2"
          className={'text-gray-4 font-medium text-[14px] !mt-[16px]'}
        >
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across
        </Typography>
      </CardContent>
    </Card>
  );
}
