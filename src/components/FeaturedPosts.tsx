import React from 'react';
import PostGrid from './PostGrid';
import { getFeaturedPosts } from '@/service/posts';

export default async function FeaturedPosts() {
  const posts = await getFeaturedPosts();

  return (
    <section>
      <h1 className='text-2xl font-bold my-2'>FeaturedPosts</h1>
      <PostGrid posts={posts} />
    </section>
  );
}
