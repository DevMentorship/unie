import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import cn from 'classnames';
import Image from 'next/image';
import { Autoplay, Navigation } from 'swiper';
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
      name: 'GG',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate.',
      instagram: 'instagram',
      vk: 'vk',
      photo: '/katya.jpg',
    },
    {
      name: 'AA',
      description:
        'Ad dolore dignissimos asperiores dicta facere optio quod commodi nam tempore recusandae. Rerum sed nulla eum vero expedita ex delectus voluptates rem at neque quos facere sequi unde optio aliquam!',
      instagram: 'instagram',
      vk: 'vk',
      photo: '/kolya.jpg',
    },
  ];

  return (
    <Swiper
      modules={[Autoplay, Navigation]}
      spaceBetween={30}
      slidesPerView={1}
      centeredSlides={true}
      className={styles.slider}
      navigation={{
        nextEl: '.next',
        prevEl: '.prev',
      }}
      autoplay={{
        delay: 20000,
        disableOnInteraction: false,
      }}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index} className={styles.slider_column}>
          <div className={cn(styles.swiper, styles.swiper_slider)}>
            <div className={styles.slider_wrapper}>
              <div>
                <Image src={slide.photo} alt={slide.name} width={270} height={360} />
              </div>
              <div className={styles.first_block}>{slide.name}</div>
              <div className={styles.socials}>
                <button className={styles.button}>{slide.instagram}</button>
                <button className={styles.button}>{slide.vk}</button>
              </div>
              <div className={styles.second_block}>
                <p>{slide.description}</p>
              </div>
            </div>

            <button className={cn(styles.button_prev, 'prev')}>
              <Image src="/left-arrow.svg" alt={''} width={28} height={28} />
            </button>

            <button className={cn(styles.button_next, 'next')}>
              <Image src="/right-arrow.svg" alt={''} width={28} height={28} />
            </button>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
