import { ProfileNavigatorItem } from 'constants/menu';
import Link from 'next/link';

type Props = {
  item: ProfileNavigatorItem;
  href: string;
};

export default function ProfileNavigatorItemComp({ item, href }: Props) {
  return (
    <Link
      href={href}
      className="py-3 px-4 flex flex-col items-center border-b-2"
    >
      <item.icon className="text-3xl text-dark" />
      <span className="text-dark">{item.label}</span>
    </Link>
  );
}
