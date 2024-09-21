'use client';

import { HiMiniBars3BottomLeft } from 'react-icons/hi2';
import IconButton from '@mui/material/IconButton';
import { useSetAtom } from 'jotai/react';
import { rootLayoutAtom } from '../../../../stores/layout/state';

export function DrawerToggleButton() {
  const setRootLayout = useSetAtom(rootLayoutAtom);

  function handleToggleDrawer() {
    setRootLayout({
      openDrawer: true,
    });
  }

  return (
    <IconButton
      size="large"
      edge="start"
      color="inherit"
      aria-label="open drawer"
      className={'!mx-2 mr-2'}
      onClick={handleToggleDrawer}
    >
      <HiMiniBars3BottomLeft size={25} />
    </IconButton>
  );
}
