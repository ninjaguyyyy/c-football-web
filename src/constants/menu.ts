import { IconType } from 'react-icons';
import { GiAbstract045, GiShop, GiNewspaper, GiGamepad, GiHighKick } from 'react-icons/gi';

export interface SidebarItem {
  icon: IconType;
  label: string;
  activePathname: string;
  link: string;
}

export interface ProfileNavigatorItem {
  icon: IconType;
  label: string;
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

export const PROFILE_NAVIGATOR_ITEMS: ProfileNavigatorItem[] = [
  { icon: GiGamepad, label: 'Games', link: '/games' },
  {
    icon: GiHighKick,
    label: 'Members',
    link: '/members',
  },
];
