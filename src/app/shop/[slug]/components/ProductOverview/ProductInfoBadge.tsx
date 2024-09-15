import { HiOutlineSquare3Stack3D } from 'react-icons/hi2';
import React from 'react';

type Props = {
  icon: React.ReactNode;
  title: string;
  value: string;
};

export function ProductInfoBadge({ icon, title, value }: Props) {
  return (
    <div className={'flex items-center gap-4'}>
      {icon}
      <div>
        <p
          className={
            'my-0 text-[#8b8b8b] leading-4 text-[0.775rem] font-bold uppercase'
          }
        >
          {title}
        </p>
        <p className={'my-0 uppercase font-bold text-[0.875rem]'}>{value}</p>
      </div>
    </div>
  );
}
