import Link from 'next/link';
import { GiSoccerBall } from 'react-icons/gi';
import { HiArrowLongRight } from 'react-icons/hi2';

export default function MatchResultDetail() {
  return (
    <div className="flex justify-center flex-col items-center">
      <div className="flex items-start gap-5 w-full">
        <div className="flex flex-col items-end flex-1">
          <div className="flex items-center gap-2">
            <span>Fernado Fernado Torres 50</span>
            <GiSoccerBall className="text-base" />
          </div>
          <div className="flex items-center gap-2">
            <span>Torres 50</span>
            <GiSoccerBall className="text-base" />
          </div>
        </div>

        <span className="w-[48px] text-center">FT</span>

        <div className="flex flex-col items-start flex-1">
          <div className="flex items-center gap-2">
            <GiSoccerBall className="text-base" />
            <span>Torres 50</span>
          </div>
          <div className="flex items-center gap-2">
            <GiSoccerBall className="text-base" />
            <span>Torres xx 50</span>
          </div>
        </div>
      </div>

      <Link
        href={'/'}
        className="uppercase text-black hover:text-black flex items-center gap-2 mt-3 text-[13px] match-review"
      >
        <span>Match Review</span>
        <HiArrowLongRight className="text-xl text-purple" />
      </Link>
    </div>
  );
}
