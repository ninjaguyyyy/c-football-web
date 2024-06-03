import Link from 'next/link';

type Props = {
  fontSize?: number;
};

const DEFAULT_FONT_SIZE = 12;

export default function BlogPostCategoryTimestamp({
  fontSize = DEFAULT_FONT_SIZE,
}: Props) {
  return (
    <div className={`flex gap-1 uppercase`} style={{ fontSize }}>
      <Link href={''} className="font-semibold">
        FOOD
      </Link>
      <span>-</span>
      <span>OCTOBER 13, 2021</span>
    </div>
  );
}
