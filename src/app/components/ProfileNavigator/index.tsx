import ProfileNavigatorItemComp from 'app/components/ProfileNavigator/ProfileNavigatorItemComp';
import { ProfileNavigatorItem } from 'constants/menu';

type Props = {
  items: ProfileNavigatorItem[];
  pathname: string;
};

export default function ProfileNavigator({ items, pathname }: Props) {
  return (
    <div className="w-full my-4 bg-white flex items-center gap-6 rounded-xl px-4 font-bold box-border">
      {items.map((item) => {
        const href = pathname + item.link;
        return (
          <ProfileNavigatorItemComp item={item} href={href} key={item.label} />
        );
      })}
    </div>
  );
}
