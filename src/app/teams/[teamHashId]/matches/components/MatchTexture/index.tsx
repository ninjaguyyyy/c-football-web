import MatchInfo from 'app/teams/[teamHashId]/matches/components/MatchInfo';
import { MatchType } from 'constants/common';
import Image from 'next/image';
import { GiSoccerField } from 'react-icons/gi';
import AstonVillaImg from 'statics/images/aston_villa.png';
import MUImg from 'statics/images/mu.png';

export default function MatchTexture() {
  return (
    <div>
      <div className="flex bg-gray-1 py-3 px-4 gap-4 text-[13px]">
        <span>Sun 11 Feb</span>
        <span>|</span>
        <div className="flex items-center gap-2">
          <GiSoccerField className="text-lg" />
          <span className="text-gray-3">Villa Park</span>
        </div>
      </div>

      <MatchInfo type={MatchType.TEXTURE} />
    </div>
  );
}
