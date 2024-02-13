'use client';

import ProfileHeader from 'app/components/ProfileHeader';
import ProfileNavigator from 'app/components/ProfileNavigator';
import { PROFILE_NAVIGATOR_ITEMS } from 'constants/menu';

export default function Layout({ children, params }: any) {
  return (
    <div className="w-full">
      <ProfileHeader />
      <ProfileNavigator
        items={PROFILE_NAVIGATOR_ITEMS}
        pathname={`/teams/${params.teamHashId}`}
      />
      {children}
    </div>
  );
}
