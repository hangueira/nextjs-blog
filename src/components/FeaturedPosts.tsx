import React from 'react';
import PostGrid from './PostGrid';
import { getAllPosts } from '@/service/posts';

export default async function FeaturedPosts() {
  const posts = await getAllPosts();

  return (
    <section>
      <h1>FeaturedPosts</h1>
      <PostGrid posts={posts} />
    </section>
  );
}
