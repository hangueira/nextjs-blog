import { Post } from '@/service/posts';
import React from 'react';

type Props = { posts: Post[] };

export default function PostGrid({ posts }: Props) {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.title}>{post.title}</li>
      ))}
    </ul>
  );
}
