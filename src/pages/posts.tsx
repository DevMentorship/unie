import Head from 'next/head';

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
    <section className="container">
      {posts.map((post) => (
        <div key={post._id}>
          <h2>{post.title}</h2>
          <p>{post.publishedAt}</p>
          <p>{post.description}</p>
          {/* <Link href={`/post/${post.slug.current}`}>
            <span>Подробнее</span>
          </Link> */}
        </div>
      ))}
    </section>
    <Cards news={news} />
  </>
);

export default Posts;

export const getStaticProps = async () => {
  const query = `{
    "posts": *[_type == "post"] | order(publishedAt desc)  {_id, publishedAt, title, description, mainImage, slug},
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
