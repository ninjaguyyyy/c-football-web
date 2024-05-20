import Banner from 'app/components/Banner';
import ProductFilter from 'app/shop/components/ProductFilter';
import Test1 from 'app/shop/components/Test1';
import Test2 from 'app/shop/components/Test2';
import { Suspense } from 'react';

export default async function Shop() {
  return (
    <div className="w-full">
      <Banner />
      <ProductFilter className="my-8" />

      <section className="mt-2 container mx-auto flex min-h-screen flex-col items-center justify-between bg-white">
        Shop
        <Suspense fallback={<div>Loading test 1</div>}>
          <Test1 />
        </Suspense>
        <Suspense fallback={<div>Loading test 2</div>}>
          <Test2 />
        </Suspense>
      </section>
    </div>
  );
}
