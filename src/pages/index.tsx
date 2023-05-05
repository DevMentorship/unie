import Head from 'next/head';
import Image from 'next/image';

import { Advantages } from '@/components/Advantages/Advantages';
import { Contacts } from '@/components/Contacts/Contacts';
import { Reviews } from '@/components/Reviews/Reviews';
import { Team } from '@/components/Team/Team';

export default function Home() {
  return (
    <>
      <Head>
        <title>Unie</title>
      </Head>
      <h1 className="visually-hidden">Unie espresso bar</h1>
      <h2 className="visually-hidden">Первый эспрессо бар в Самаре</h2>
      <section className="hero container">
        <Image className="hero__image image" src="/unie-hero.jpg" alt="hero banner" width={1590} height={530} />
      </section>
      <section className="gallery container">
        <Image className="gallery__image image" src="/unie-photo.jpg" alt="flip animation" width={1280} height={1280} />
      </section>

      <Advantages />

      <Contacts />
      <Team />
      <Reviews />
    </>
  );
}
