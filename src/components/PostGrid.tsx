import { Post } from '@/service/posts';
import React from 'react';
import PostCard from './PostCard';

type Props = { posts: Post[] };

export default function PostGrid({ posts }: Props) {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.title}>
          <PostCard post={post} />
        </li>
      ))}
    </ul>
  );
}
