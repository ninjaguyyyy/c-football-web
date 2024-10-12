import classes from './cart.module.scss';

export default function CartPage() {
  return (
    <div className={classes.cart}>
      <h2 className={'title'}>
        Shopping Cart <span className={'quantity'}>3</span>
      </h2>
    </div>
  );
}
