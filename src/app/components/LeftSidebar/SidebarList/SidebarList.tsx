import { SIDEBAR_ITEMS } from '../../../../constants/menu';
import SidebarItemComp from '../SidebarItem';
import classes from './SidebarList.module.scss';

export function SidebarList() {
  return (
    <ul className={classes.list}>
      {SIDEBAR_ITEMS.map((item) => {
        return <SidebarItemComp item={item} key={item.label} />;
      })}
    </ul>
  );
}
