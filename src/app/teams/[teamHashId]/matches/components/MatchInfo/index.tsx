import { MatchType } from 'constants/common';
import Image from 'next/image';
import AstonVillaImg from 'statics/images/aston_villa.png';
import MUImg from 'statics/images/mu.png';

type Props = {
  type: MatchType;
};

export default function MatchInfo({ type }: Props) {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex items-center mx-auto gap-4 py-4 w-full">
        <div className="flex items-center flex-1 justify-end gap-4">
          <span>Aston Villa Man Utd</span>
          <Image src={AstonVillaImg} alt="first-team" width={26} height={26} />
        </div>

        <span
          className={`${
            type === MatchType.TEXTURE ? 'bg-gray-2' : 'bg-black'
          } block p-2 text-white rounded-lg`}
        >
          3 - 0
        </span>

        <div className="flex items-center flex-1 gap-4">
          <Image src={MUImg} alt="second-team" width={26} height={26} />
          <span className="font-semibold">Man Utd</span>
        </div>
      </div>
    </div>
  );
}
