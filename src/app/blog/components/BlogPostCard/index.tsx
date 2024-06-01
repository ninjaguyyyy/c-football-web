import Image from 'next/image';
import styles from './index.module.scss';
import Mit from 'statics/images/qua-mit.jpg';
import Link from 'next/link';

export default function BlogPostCard() {
  return (
    <div className={`${styles.container} flex justify-end h-[230px] relative`}>
      <div className="w-1/2 h-full absolute top-0 left-0 z-10 ">
        <Image
          src={Mit}
          alt="qua-mit"
          fill
          objectFit="cover"
          className="rounded-l-xl"
        />
      </div>

      <div className="flex flex-col justify-between z-20 w-1/2 pb-4 items-end pr-3">
        <div
          className={`${styles['title-area']} w-full h-[110px] mt-4 translate-x-[-0px] px-7 py-6 `}
        >
          <div className="flex gap-1 uppercase text-xs">
            <Link href={''} className="font-semibold">
              FOOD
            </Link>
            <span>-</span>
            <span>OCTOBER 13, 2021</span>
          </div>
          <p className="py-0 my-0 mt-3 text-xl font-bold leading-5 truncate-to-3-lines">
            Here’s the X-mas Gamer Box from Powerstation and it pac
          </p>
        </div>

        <div className="flex gap-4 px-2 text-xs font-bold">
          <span>2 Comments</span>
          <span>0 Shares</span>
        </div>
      </div>
    </div>
  );
}
