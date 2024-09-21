import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import classes from './ProductCard.module.scss';
import BunXiDau from 'statics/images/bun-xi-dau.jpg';
import Image from 'next/image';
import Link from 'next/link';

export function ProductCard() {
  return (
    <Card className={`${classes.container}`}>
      <div className={'w-full h-[140px] sm:h-[180px] relative'}>
        <Link href="/shop/a">
          <Image src={BunXiDau} alt={'bun-xi-dau'} layout={'fill'} />
        </Link>
      </div>

      <CardContent className={'content-wrapper'}>
        <p className={'price'}>
          250 <span className={'text-lightblue'}>đ</span>
        </p>
        <p className="title">Bun thit nuong</p>
        <Typography variant="body2" className={'sub-title'}>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across
        </Typography>
      </CardContent>
    </Card>
  );
}
