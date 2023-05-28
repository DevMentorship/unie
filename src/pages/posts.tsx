import Head from 'next/head';

import { PostsCarousel } from '@/components/PostsCarousel/PostsCarousel';

import { Cards, INews } from '../components/Cards/Cards';
import { client } from '../lib/client';
import type { IPost } from './post/[slug]';

interface IProps {
  posts: IPost[];
  news: INews[];
}

const Posts = ({ posts, news }: IProps) => (
  <>
    <Head>
      <title>Unie - Новости</title>
    </Head>
    <PostsCarousel posts={posts} />
    <Cards news={news} />
  </>
);

export default Posts;

export const getStaticProps = async () => {
  const query = `{
    "posts": *[_type == "post"],
    "news": *[_type == "news"] | order(number asc) {_id, title, mainImage}
  }`;

  const result = await client.fetch(query);
  const posts = result.posts.map((post: IPost) => ({
    ...post,
    publishedAt: new Date(post.publishedAt).toLocaleString('default', { month: 'short', day: 'numeric' }),
  }));

  const news = result.news;

  return { props: { posts, news } };
};
