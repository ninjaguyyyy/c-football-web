'use client';

// import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// import MailIcon from '@mui/icons-material/Mail';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SidebarItemComp from 'app/components/LeftSidebar/SidebarItem';
import { SIDEBAR_ITEMS } from 'constants/menu';
import { useState } from 'react';
import styles from './index.module.scss';

type Props = {
  className?: string;
};

export default function Test({ className }: Props) {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Drawer
      variant="permanent"
      open={open}
      PaperProps={{ className: `${className} ${styles.sidebar} py-6 px-6` }}
    >
      <ul
        className={`${styles.list} container flex flex-col items-center h-full gap-4 pl-0`}
      >
        {SIDEBAR_ITEMS.map((item) => {
          return <SidebarItemComp item={item} key={item.label} />;
        })}
      </ul>
    </Drawer>
  );
}
