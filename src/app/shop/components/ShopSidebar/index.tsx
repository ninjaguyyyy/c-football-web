import styles from './index.module.scss';

export default function ShopSidebar() {
  return (
    <div className={`${styles.container} px-7 py-8`}>
      <p className={'text-base font-bold text-dark my-0'}>Categories</p>
      <p className={'text-sm'}>In development</p>
    </div>
  );
}
