import SearchProductForm from 'app/shop/components/ProductFilter/components/SearchProductForm';
import styles from './index.module.scss';

type Props = {
  className?: string;
};

export default function ProductFilter({ className }: Props) {
  return (
    <section className={`${className} ${styles.container} px-6 py-4`}>
      Product Filter
      <SearchProductForm />
    </section>
  );
}
