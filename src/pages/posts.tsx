import Head from 'next/head';
import Link from 'next/link';

import { IMenu, NewsMenu } from '@/components/NewsMenu/NewsMenu';
import { client } from '@/lib/client';

import type { IPost } from './post/[slug]';

const Posts = ({ posts, menus }: { posts: IPost[]; menus: IMenu[] }) => (
  <>
    <Head>
      <title>Unie - Новости</title>
    </Head>
    <section className="container">
      {posts.map((post) => (
        <div key={post._id}>
          <h2>{post.title}</h2>
          <p>{post.publishedAt}</p>
          <p>{post.description}</p>
          <Link href={`/post/${post.slug.current}`}>
            <span>Подробнее</span>
          </Link>
        </div>
      ))}
    </section>
    <section>
      <NewsMenu menus={menus} />
    </section>
  </>
);

export default Posts;

export const getStaticProps = async () => {
  const query = `{
    "posts": *[_type == "post"] | order(publishedAt desc)  {_id, publishedAt, title, description, mainImage, slug},
    "menus": *[_type == "menu"]
  }`;

  const { posts: postResult, menus } = await client.fetch(query);

  const posts = postResult.map((post: IPost) => ({
    ...post,
    publishedAt: new Date(post.publishedAt).toLocaleString('default', { month: 'short', day: 'numeric' }),
  }));

  return { props: { posts, menus } };
};
