import { Button } from 'antd';
import ProfileHeader from 'app/components/ProfileHeader';
import ProfileNavigator from 'app/components/ProfileNavigator';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="flex min-h-screen flex-col items-center justify-between p-24">
      <ProfileHeader />
      <ProfileNavigator />
      Football
      {children}
    </section>
  );
}
