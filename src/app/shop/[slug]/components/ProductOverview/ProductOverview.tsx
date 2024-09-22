import classNames from 'classnames';
import styles from './ProductOverview.module.scss';
import Button from '@mui/material/Button';
import { QuantitySelector } from './QuantitySelector';
import { ProductInfoBadges } from './ProductInfoBadges';

type Props = {
  className?: string;
};

export function ProductOverview({ className }: Props) {
  return (
    <div className={classNames(styles.container, className)}>
      <p className={'text-[1.75rem] sm:text-[2rem] font-bold mt-0 mb-1'}>
        Name
      </p>
      <div className={'flex gap-2 items-center'}>
        <span
          className={
            'block w-2 h-2 rounded-full border-2 border-solid border-lightblue'
          }
        ></span>
        <span className={'font-bold'}>Do an</span>
      </div>
      <p className={'text-2xl sm:text-3xl font-bold mt-2 mb-3'}>
        36 <span className={'text-lightblue'}>đ</span>
      </p>
      <p className={'text-[0.875rem] leading-5 font-medium mt-0'}>
        Check out this great new Vikinger product!! This is one of our newest
        shop products, hope you like it, and if you do, please remember to leave
        a rating! You can also read a more detailed description of it right
        below.
      </p>

      <ProductInfoBadges />

      <QuantitySelector />

      <Button
        variant="contained"
        className={
          'add-cart-btn !bg-lightblue !shadow-none w-full sm:w-[200px] !mt-8 h-[48px] !normal-case !font-bold !text-[1rem] !rounded-[10px]'
        }
      >
        Add to Your Cart!
      </Button>
    </div>
  );
}
