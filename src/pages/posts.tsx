import Head from 'next/head';

import { Cards } from '@/components/Cards/Cards';
import { ProductCarousel } from '@/components/ProductCarousel/ProductCarousel';
import { client } from '@/lib/client';

import type { IPost } from './post/[slug]';

const Posts = ({ posts }: { posts: IPost[] }) => (
  <>
    <Head>
      <title>Unie - Новости</title>
    </Head>
    <ProductCarousel posts={posts} />
    <Cards />
  </>
);

export default Posts;

export const getStaticProps = async () => {
  const query = `{
    "posts": *[_type == "post"] ,
  }`;

  const { posts: result } = await client.fetch(query);

  const posts = result.map((post: IPost) => ({
    ...post,
    publishedAt: new Date(post.publishedAt).toLocaleString('default', { month: 'short', day: 'numeric' }),
  }));

  return { props: { posts } };
};
