import { SidebarItem } from 'constants/menu';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type Props = {
  item: SidebarItem;
};

export default function SidebarItemComp({ item }: Props) {
  const pathname = usePathname();

  const isActive = pathname === item.activePathname;

  return (
    <Link
      href={item.link}
      passHref
      className={`${
        isActive ? 'active' : ''
      } px-3 py-2 rounded-xl flex items-center gap-4 w-full bg-white cursor-pointer`}
    >
      <item.icon className="text-2xl text-gray" />
      <span className="font-bold text-dark">{item.label}</span>
    </Link>
  );
}
