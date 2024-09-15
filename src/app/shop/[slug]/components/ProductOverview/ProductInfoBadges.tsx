import React from 'react';
import { HiOutlineSquare3Stack3D, HiOutlineTruck } from 'react-icons/hi2';
import { ProductInfoBadge } from './ProductInfoBadge';

export function ProductInfoBadges() {
  return (
    <div className={'flex items-center gap-10 my-8'}>
      <ProductInfoBadge
        icon={<HiOutlineSquare3Stack3D size={26} />}
        title={'Availability'}
        value={'In Stock'}
      />

      <ProductInfoBadge
        icon={<HiOutlineTruck size={26} />}
        title={'shipping'}
        value={'Da Nang'}
      />
    </div>
  );
}
