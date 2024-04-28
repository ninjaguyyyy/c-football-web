import Image from 'next/image';
import styles from './index.module.scss';
import BannerBgImage from 'statics/images/banner-bg.webp';
import StoreImage from 'statics/images/marketplace-icon.webp';

export default function Banner() {
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
        src={StoreImage}
        alt="shop"
        className="h-[110%] w-auto translate-y-[-12px]"
      />

      <div className="ml-3 pt-1 text-white">
        <p className="font-bold text-3xl mb-0">Marketplace</p>
        <p className="mt-0 font-medium text-base">
          The best place for the community to buy and sell!
        </p>
      </div>
    </section>
  );
}
