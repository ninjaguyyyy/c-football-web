import Link from 'next/link';

export default function ProfileNavigator() {
  return (
    <div className="w-full mt-2">
      <Link href="/games">Games</Link>
      <Link href="/members">Members</Link>
    </div>
  );
}
