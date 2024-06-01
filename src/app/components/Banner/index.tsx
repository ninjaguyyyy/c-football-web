import Image, { StaticImageData } from 'next/image';
import styles from './index.module.scss';
import BannerBgImage from 'statics/images/banner-bg.webp';

type Props = {
  image: StaticImageData;
  title: string;
  subTitle: string;
};

export default function Banner({ image, title, subTitle }: Props) {
  return (
    <section className={`${styles.banner} h-[120px] w-full relative flex`}>
      <Image
        alt="banner-bg"
        src={BannerBgImage}
        placeholder="blur"
        fill
        style={{
          objectFit: 'cover',
          zIndex: -1,
        }}
        className="rounded-xl"
      />
      <Image
        src={image}
        alt="shop"
        className="h-[110%] w-auto translate-y-[-12px]"
      />

      <div className="ml-3 pt-1 text-white">
        <p className="font-bold text-3xl mb-0">{title}</p>
        <p className="mt-0 font-medium text-base">{subTitle}</p>
      </div>
    </section>
  );
}
