import Mit from 'statics/images/qua-mit.jpg';
import Image from 'next/image';
import BlogPostCategoryTimestamp from 'app/blog/components/BlogPostCategoryTimestamp';
import styles from './index.module.scss';

const HTML_CONTENT = `
<h3>Test H1</h3>

<h3>Tong quan về vàng</h2>

<p><strong>Vàng là gì?</strong><br>
<br>
Cách phân biệt các loại vàng</p>


`;

export default function BlogPostDetail() {
  return (
    <article className={`${styles.container} w-full`}>
      <div className="w-full h-[560px] relative">
        <Image
          src={Mit}
          alt="qua-mit"
          fill
          objectFit="cover"
          className="rounded-xl"
        />
      </div>
      <div className="w-[700px] pt-[90px] section-shadow mx-auto mt-[-220px] relative z-20">
        <div className="px-[100px]">
          <div>
            <BlogPostCategoryTimestamp fontSize={16} />
            <h2 className="text-[2.875rem] font-bold leading-[1em] mt-5">
              [Exclusive!] Check out all the new missions and story of the Fire
              Witch DLC!
            </h2>
          </div>
          <div
            className="pb-8"
            dangerouslySetInnerHTML={{ __html: HTML_CONTENT }}
          />
        </div>
        <div className="flex justify-between mx-7 py-4 border-0 border-t border-solid border-[#eaeaf5] text-xs font-bold">
          <span></span>
          <div className="flex items-center gap-4">
            <span>0 Comments</span>
            <span>0 Shares</span>
          </div>
        </div>
      </div>
    </article>
  );
}
