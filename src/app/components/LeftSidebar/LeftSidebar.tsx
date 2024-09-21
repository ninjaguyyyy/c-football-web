'use client';

import { SIDEBAR_ITEMS } from 'constants/menu';
import styles from './LeftSidebar.module.scss';
import SidebarItemComp from 'app/components/LeftSidebar/SidebarItem';
import { Box, Drawer } from '@mui/material';
import { useState } from 'react';
import { SidebarList } from './SidebarList';
import { useAtom } from 'jotai/react';
import { rootLayoutAtom } from '../../../stores/layout/state';
import classes from './LeftSidebar.module.scss';
import Avatar from '../Avatar';
import { MobileSidebar } from './MobileSidebar';

type Props = {
  className?: string;
};

export function LeftSidebar({ className }: Props) {
  const [{ openDrawer }, setRootLayout] = useAtom(rootLayoutAtom);

  function handleCloseDrawer() {
    setRootLayout({
      openDrawer: false,
    });
  }

  return (
    <Box
      component="nav"
      aria-label="mailbox folders"
      className={classes.sidebar}
    >
      <Drawer
        variant="temporary"
        open={openDrawer}
        onClose={handleCloseDrawer}
        ModalProps={{
          keepMounted: true,
        }}
        disableScrollLock={true}
        className={classes.sidebar}
      >
        <MobileSidebar />
      </Drawer>
      {/*<Drawer*/}
      {/*  variant="permanent"*/}
      {/*  sx={{*/}
      {/*    display: { xs: 'none', sm: 'block' },*/}
      {/*    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },*/}
      {/*  }}*/}
      {/*  open*/}
      {/*>*/}
      {/*  {drawer}*/}
      {/*</Drawer>*/}
    </Box>
  );
}
