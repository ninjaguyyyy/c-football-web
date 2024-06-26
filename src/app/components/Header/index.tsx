﻿import Logo from 'app/components/Logo';
import Link from 'next/link';
import { HiOutlineSquares2X2 } from 'react-icons/hi2';

export default function Header() {
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
        {/* <HeaderMenu /> */}

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
