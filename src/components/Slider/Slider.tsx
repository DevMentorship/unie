import 'swiper/css';
import 'swiper/css/bundle';

import Image from 'next/image';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import styles from '@/components/Slider/Slider.module.css';

export const Slider = () => {
  const slides = [
    {
      name: 'Никита',
      description:
        'Если вы увидите парня в Unie, который всегда рад вас видеть, всегда готов помочь с выбором и подсказать, какой кофе сегодня на фильтре, а какое пиво на кране, то знайте, что это Никита!',
      instagram: 'instagram',
      vk: 'vk',
      photo: '/nikita.jpg',
    },
    {
      name: 'Никита',
      description:
        'Если вы увидите парня в Unie, который всегда рад вас видеть, всегда готов помочь с выбором и подсказать, какой кофе сегодня на фильтре, а какое пиво на кране, то знайте, что это Никита!',
      instagram: 'instagram',
      vk: 'vk',
      photo: '/nikita.jpg',
    },
    {
      name: 'Никита',
      description:
        'Если вы увидите парня в Unie, который всегда рад вас видеть, всегда готов помочь с выбором и подсказать, какой кофе сегодня на фильтре, а какое пиво на кране, то знайте, что это Никита!',
      instagram: 'instagram',
      vk: 'vk',
      photo: '/nikita.jpg',
    },
  ];

  return (
    <Swiper
      modules={[Pagination]}
      spaceBetween={30}
      slidesPerView={1}
      pagination={{ clickable: true }}
      centeredSlides={true}
      className={styles.slider}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <p className="paragraph2">{slide.description}</p>
          <button>Подробнее</button>
          <Image src={slide.photo} alt={slide.name} width={270} height={360} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
