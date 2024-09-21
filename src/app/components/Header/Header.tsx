import Logo from 'app/components/Logo';
import Link from 'next/link';
import { HiOutlineSquares2X2 } from 'react-icons/hi2';

import { AppBar, Box, Toolbar } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import classes from './Header.module.scss';
import { SearchButton } from './SearchButton';
import { DrawerToggleButton } from './DrawerToggleButton';

export function Header() {
  return (
    <Box className={classes.header}>
      <AppBar position="static" className={'app-bar'}>
        <Toolbar className={'tool-bar'}>
          <Logo width={40} />
          <DrawerToggleButton />
          <SearchButton />
          {/*<SearchIcon />*/}
          <Box sx={{ flexGrow: 1 }} />
          {/*<Box sx={{ display: { xs: 'none', md: 'flex' } }}>*/}
          {/*  <IconButton*/}
          {/*    size="large"*/}
          {/*    aria-label="show 4 new mails"*/}
          {/*    color="inherit"*/}
          {/*  >*/}
          {/*    <Badge badgeContent={4} color="error">*/}
          {/*      <MailIcon />*/}
          {/*    </Badge>*/}
          {/*  </IconButton>*/}
          {/*  <IconButton*/}
          {/*    size="large"*/}
          {/*    aria-label="show 17 new notifications"*/}
          {/*    color="inherit"*/}
          {/*  >*/}
          {/*    <Badge badgeContent={17} color="error">*/}
          {/*      <NotificationsIcon />*/}
          {/*    </Badge>*/}
          {/*  </IconButton>*/}
          {/*  <IconButton*/}
          {/*    size="large"*/}
          {/*    edge="end"*/}
          {/*    aria-label="account of current user"*/}
          {/*    aria-controls={menuId}*/}
          {/*    aria-haspopup="true"*/}
          {/*    onClick={handleProfileMenuOpen}*/}
          {/*    color="inherit"*/}
          {/*  >*/}
          {/*    <AccountCircle />*/}
          {/*  </IconButton>*/}
          {/*</Box>*/}
        </Toolbar>
      </AppBar>
    </Box>
  );

  return (
    <header
      className={`fixed left-0 right-0 bg-purple h-[80px] px-6 text-white flex items-center z-30`}
    >
      <Logo width={40} />
      {/* <InputField
          suffix={<FaSearch className="text-base" />}
          className="w-[320px]"
        /> */}
      <div className="flex items-center gap-[200px] ml-20">
        <div className="flex gap-12 items-center">
          <HiOutlineSquares2X2 className="text-2xl cursor-pointer text-[#8b88ff] hover:text-white" />
          <Link href="" className="text-white font-bold block">
            <span>Home</span>
          </Link>
          <Link href="/blog" className="text-white font-bold block">
            Blog
          </Link>
          <Link href="" className="text-white font-bold block">
            <span>Contact Us</span>
          </Link>
          {/* <MdOutlineLightMode className="text-[30px] hover:bg-[#edeef0] cursor-pointer xs:hidden" /> */}
          {/* <HiOutlineBell className="text-[25px] hover:bg-[#edeef0] cursor-pointer" /> */}
        </div>
      </div>
    </header>
  );
}
