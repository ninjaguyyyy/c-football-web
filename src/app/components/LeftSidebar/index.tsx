'use client';

import { SIDEBAR_ITEMS } from 'constants/menu';
import styles from './index.module.scss';
import SidebarItemComp from 'app/components/LeftSidebar/SidebarItem';
import { Box, Drawer } from '@mui/material';
import { useState } from 'react';
import { SidebarList } from './SidebarList';

type Props = {
  className?: string;
};

export default function LeftSidebar({ className }: Props) {
  const [open, setOpen] = useState<boolean>(true); // use global state

  function handleCloseDrawer() {
    setOpen(false);
  }

  return (
    <Box component="nav" aria-label="mailbox folders">
      <Drawer
        variant="temporary"
        open={open}
        onClose={handleCloseDrawer}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <SidebarList />
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
