import { IconType } from 'react-icons';
import { GiAbstract045, GiShop, GiNewspaper } from 'react-icons/gi';

export interface SidebarItem {
  icon: IconType;
  label: string;
  activePathname: string;
  link: string;
}

export const SIDEBAR_ITEMS: SidebarItem[] = [
  { icon: GiNewspaper, label: 'News Feed', activePathname: '/', link: '/' },
  {
    icon: GiAbstract045,
    label: 'Teams',
    activePathname: '/teams',
    link: '/teams',
  },
  { icon: GiShop, label: 'Shop', activePathname: '/shop', link: '/shop' },
];
