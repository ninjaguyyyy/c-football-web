'use client';

import StoreImage from '../../statics/images/marketplace-icon.webp';
import Banner from '../components/Banner';

export default function Layout({ children, params }: any) {
  return (
    <div className="w-full">
      <Banner
        image={StoreImage}
        title="Marketplace"
        subTitle="The best place for the community to buy and sell!"
      />
      {children}
    </div>
  );
}
