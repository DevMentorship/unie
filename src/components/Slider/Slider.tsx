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
      slidesPerView={3}
      centeredSlides={true}
      className={styles.slider}
      loop={true}
      navigation={{
        nextEl: '.next',
        prevEl: '.prev',
      }}
      // autoplay={{
      //   delay: 20000,
      //   disableOnInteraction: false,
      // }}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className={styles.image}>
            <Image src={slide.photo} alt={slide.name} width={270} height={360} />
          </div>
          <h4 className={styles.name}>{slide.name}</h4>

          <div className={styles.socials}>
            <button className={styles.icons}>
              <Image src="/vk.svg" className={styles.button} alt={''} width={40} height={40} />
            </button>

            <button className={styles.icons}>
              <Image src="/instagram.svg" className={styles.button} alt={''} width={40} height={40} />
            </button>
          </div>

          <p className={styles.description}>{slide.description}</p>
        </SwiperSlide>
      ))}
      <div className={styles.buttons}>
        <button className={cn(styles.prev, 'prev')}>
          <span className="visually-hidden">Prev Slide</span>
          <Image src="/arrow.svg" alt="prev arrow" width={30} height={30} />
        </button>

        <button className={cn(styles.next, 'next')}>
          <span className="visually-hidden">Next Slide</span>
          <Image src="/arrow.svg" alt="next arrow" width={30} height={30} />
        </button>
      </div>
    </Swiper>
  );
};
