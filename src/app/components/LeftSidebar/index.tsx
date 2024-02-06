'use client';

import { SIDEBAR_ITEMS } from 'constants/menu';
import styles from './index.module.scss';
import SidebarItemComp from 'app/components/LeftSidebar/SidebarItem';

type Props = {
  className?: string;
};

export default function LeftSidebar({ className }: Props) {
  return (
    <ul
      className={`${className} ${styles.sidebar} container flex flex-col items-center h-full gap-4 py-6 px-6`}
    >
      {SIDEBAR_ITEMS.map((item) => {
        return <SidebarItemComp item={item} key={item.label} />;
      })}
    </ul>
  );
}
