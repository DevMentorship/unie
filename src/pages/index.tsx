import Head from 'next/head';

import { Advantages } from '@/components/Advantages/Advantages';
import { Contacts } from '@/components/Contacts/Contacts';
import { Hero, IHero } from '@/components/Hero/Hero';
import { Reviews } from '@/components/Reviews/Reviews';
import { Team } from '@/components/Team/Team';
import { client } from '@/lib/client';

export default function Home({ hero }: { hero: IHero[] }) {
  return (
    <>
      <Head>
        <title>Unie</title>
      </Head>
      <h1 className="visually-hidden">Unie espresso bar</h1>
      <h2 className="visually-hidden">Первый эспрессо бар в Самаре</h2>
      <Hero hero={hero} />

      <Advantages />

      <Contacts />
      <Team />
      <Reviews />
    </>
  );
}

export const getStaticProps = async () => {
  const query = `{
    "hero": *[_type == "hero"]
  }`;

  const { hero }: { hero: IHero[] } = await client.fetch(query);

  return { props: { hero } };
};
