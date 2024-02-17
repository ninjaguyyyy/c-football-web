import { Input } from 'antd';
import styles from './index.module.scss';

type Props = {};

export default function TextInputField() {
  return (
    <Input
      className={`${styles.container} px-[18px] py-[10px] rounded-xl`}
      placeholder="Basic usage"
    />
  );
}
