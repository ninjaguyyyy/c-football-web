import Image from 'next/image';

import AvatarImg from 'statics/images/avatar.jpeg';

type Props = {
  width?: number;
  className?: string;
};

export default function Avatar({ width = 140, className }: Props) {
  return (
    <Image
      className={`${className} rounded-full p-2 bg-white`}
      style={{ width: width, height: width }}
      src={AvatarImg}
      alt="avatar-img"
    />
  );
}
