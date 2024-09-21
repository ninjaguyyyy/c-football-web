import Avatar from '../../Avatar';
import { SidebarList } from '../SidebarList';
import Link from 'next/link';
import { HiArrowLongLeft } from 'react-icons/hi2';
import Button from '@mui/material/Button';
import { useAtom, useSetAtom } from 'jotai/react';
import { rootLayoutAtom } from '../../../../stores/layout/state';

export function MobileSidebar() {
  const setRootLayout = useSetAtom(rootLayoutAtom);

  function handleCloseDrawer() {
    setRootLayout({
      openDrawer: false,
    });
  }

  return (
    <div>
      <div className={'flex justify-end font-bold px-6 pt-3'}>
        <HiArrowLongLeft
          className={'text-2xl cursor-pointer'}
          onClick={handleCloseDrawer}
        />
      </div>
      <div className={' px-6'}>
        <div className={'flex gap-2'}>
          <Link href={'#'}>
            <Avatar width={40} />
          </Link>

          <div className={'pt-1'}>
            <p className={'font-bold text-[14px] my-0'}>Chi CDM</p>
            <p className={'font-medium text-xs text-gray-4 my-0'}>
              Barcelona FC
            </p>
          </div>
        </div>

        <Button
          variant="contained"
          className="!mt-3 !bg-purple hover:!bg-purple-1 !font-bold h-[40px] w-[140px] !text-[0.75rem] !text-white !normal-case !rounded-[10px]"
          onClick={() => {}}
        >
          Logout
        </Button>
      </div>

      <p className={'font-bold text-sm text-gray px-6 mt-6'}>Menu</p>

      <SidebarList />
    </div>
  );
}
