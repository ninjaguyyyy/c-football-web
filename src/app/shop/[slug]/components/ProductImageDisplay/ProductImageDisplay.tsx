'use client';
import React, { useEffect, useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import styles from './ProductImageDisplay.module.scss';

interface ProductImage {
  id: number;
  link: string | StaticImageData;
}

type Props = {
  productImages: ProductImage[];
};

export function ProductImageDisplay({ productImages }: Props) {
  const [mainImageSrc, setMainImageSrc] = useState('');

  useEffect(() => {
    productImages?.length && setMainImageSrc(productImages[0].link);
  }, [productImages]);

  const handleClickItem = (image: ProductImage) => {
    setMainImageSrc(image.link);
  };

  const handleTransitionStart = (swiper: any) => {
    let translate = swiper.getTranslate();
    const slidesPerView =
      swiper.params.slidesPerView == 'auto'
        ? swiper.slidesPerViewDynamic()
        : swiper.params.slidesPerView;
    if (swiper.slides.length <= slidesPerView) {
      return;
    }

    let y = 0;
    let z = 0;
    let x = 0;
    if (swiper.activeIndex > 1 && swiper.activeIndex > slidesPerView / 2) {
      translate =
        swiper.activeIndex == swiper.slides.length - 1
          ? -swiper.snapGrid[swiper.snapGrid.length - 2]
          : swiper.translate;
      if (swiper.isHorizontal()) {
        x = swiper.rtl ? -translate : translate;
      } else {
        y = translate;
      }

      if (swiper.roundLengths) {
        x = Math.floor(x);
        y = Math.floor(y);
      }
    } else {
      y = 0;
      z = 0;
      x = 0;
    }
    if (swiper.support.transforms3d) {
      swiper.wrapperEl.style.transform =
        ' translate3d(' + x + 'px, ' + y + 'px, ' + z + 'px)';
    } else {
      swiper.wrapperEl.style.transform = ' translate(' + x + 'px, ' + y + 'px)';
    }
    handleClickItem(productImages[swiper?.activeIndex]);
  };

  return (
    <div className="relative">
      <div className={styles.main}>
        <Image
          className="rounded-lg object-cover"
          src={mainImageSrc ?? ''}
          alt="image"
          fill
        />
      </div>

      <Swiper
        spaceBetween={5}
        slidesPerView={4}
        touchRatio={0.5}
        centeredSlides={true}
        slideToClickedSlide={true}
        virtualTranslate={false}
        onTransitionStart={handleTransitionStart}
      >
        {productImages?.map((e, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="h-[80px] sm:h-[110px] relative cursor-pointer">
                <Image
                  className="rounded-md object-cover"
                  src={e.link}
                  alt="image"
                  fill
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
