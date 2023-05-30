import Head from 'next/head';
import Image from 'next/image';
import { A11y, EffectCube } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { IMenu, Menu } from '@/components/Menu/Menu';
import useElementOnScreen from '@/hooks/useElementOnScreen';
import { client } from '@/lib/client';

const images = [
  { src: '/menu-1.jpg', w: 720, h: 1280 },
  { src: '/menu-2.jpg', w: 720, h: 1280 },
  { src: '/menu-3.jpg', w: 1280, h: 910 },
];

interface IProps {
  menu: IMenu[];
}

export default function MenuPage({ menu }: IProps) {
  const { ref } = useElementOnScreen();

  return (
    <>
      <Head>
        <title>Unie - Menu</title>
      </Head>
      <h1 className="visually-hidden">Unie espresso bar</h1>
      <h2 className="visually-hidden">Первый эспрессо бар в Самаре</h2>

      <section className="menu container" ref={ref}>
        <Swiper
          className="invisible-child"
          modules={[A11y, EffectCube]}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          data-child
        >
          {images.map(({ src, w, h }, index) => (
            <SwiperSlide key={index}>
              <Image className="" src={src} alt="menu" width={w} height={h} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <Menu menu={menu} />
    </>
  );
}

export const getStaticProps = async () => {
  const query = `{
    "menu": *[_type == "menu"]
    {Poster, dishName, Weight, Price, dishDescription, proteins, fats, carbohydrates, calories}
  }`;

  const { menu } = await client.fetch(query);

  return { props: { menu } };
};
