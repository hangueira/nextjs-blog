import Avatar from '@/components/Avatar';
import FeaturedPosts from '@/components/FeaturedPosts';

export default function Home() {
  return (
    <>
      <Avatar />
      {/* @ts-expect-error Async Server Component */}
      <FeaturedPosts />
    </>
  );
}
