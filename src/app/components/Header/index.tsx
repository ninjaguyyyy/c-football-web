import Logo from 'app/components/Logo';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header
      className={`fixed left-0 right-0 bg-purple h-[80px] px-6 text-white flex items-center z-10`}
    >
      <Logo width={40} />
      {/* <InputField
          suffix={<FaSearch className="text-base" />}
          className="w-[320px]"
        /> */}
      <div className="flex items-center gap-[200px] ml-20">
        {/* <HeaderMenu /> */}
        <div className="flex gap-12 items-center">
          <Link href="" className="text-white font-bold block">
            <span>Home</span>
          </Link>
          <Link href="" className="text-white font-bold block">
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
