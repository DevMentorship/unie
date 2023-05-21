import Head from 'next/head';
import Link from 'next/link';

import { Cards } from '@/components/Cards/Cards';
import useElementOnScreen from '@/hooks/useElementOnScreen';
import { client } from '@/lib/client';

import type { IPost } from './post/[slug]';

const Posts = ({ posts }: { posts: IPost[] }) => {
  const { ref } = useElementOnScreen();

  return (
    <>
      <Head>
        <title>Unie - Новости</title>
      </Head>
      <section className="container" ref={ref}>
        <div className="invisible-child" data-child>
          {posts.map((post) => (
            <div key={post._id}>
              <h2>{post.title}</h2>
              <p>{post.publishedAt}</p>
              <p>{post.description}</p>
              <Link href={`/post/${post.slug?.current}`}>
                <span>Подробнее</span>
              </Link>
            </div>
          ))}
        </div>
      </section>

      <Cards />
    </>
  );
};

export default Posts;

export const getStaticProps = async () => {
  const query = `{
    "posts": *[_type == "post"] | order(publishedAt desc)  {_id, publishedAt, title, description, mainImage, slug},
  }`;

  const { posts: result } = await client.fetch(query);

  const posts = result.map((post: IPost) => ({
    ...post,
    publishedAt: new Date(post.publishedAt).toLocaleString('default', { month: 'short', day: 'numeric' }),
  }));

  return { props: { posts } };
};
