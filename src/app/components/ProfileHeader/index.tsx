import Avatar from 'app/components/Avatar';
import Image from 'next/image';

import TeamImg from 'statics/images/profile-header.jpeg';

export default function ProfileHeader() {
  return (
    <div className="w-full">
      <Image
        className="w-full object-cover rounded-t-xl"
        height={300}
        src={TeamImg}
        alt="header-cover"
      />
      <div className="bg-white h-[125px] w-full rounded-b-xl px-8">
        {/* Team Avatar */}
        <div className="flex items-center gap-6 translate-y-[-40px] box-border">
          <Avatar />
          <span className="text-2xl font-bold">Barcelona</span>
        </div>

        {/* Team Stats */}
        <div></div>
      </div>
    </div>
  );
}
