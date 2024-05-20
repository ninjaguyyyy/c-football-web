import TextInputField from 'app/components/Form/TextInputField';
import SearchProductForm from 'app/shop/components/ProductFilter/components/SearchProductForm';

type Props = {
  className?: string;
};

export default function ProductFilter({ className }: Props) {
  return (
    <section className={`${className} bg-white rounded-xl px-6 py-4`}>
      Product Filter
      <SearchProductForm />
    </section>
  );
}
