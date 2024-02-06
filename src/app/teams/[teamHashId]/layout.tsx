import ProfileHeader from 'app/components/ProfileHeader';
import ProfileNavigator from 'app/components/ProfileNavigator';

export default function Layout({ children, ...rest }: any) {
  console.log({ rest });
  return (
    <div className="w-full">
      <ProfileHeader />
      <ProfileNavigator />
      {children}
    </div>
  );
}
