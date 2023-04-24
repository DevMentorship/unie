import 'swiper/css';
import 'swiper/css/bundle';
import './Slider.module.css';

import Image from 'next/image';
import React, { useRef, useState } from 'react';
import { A11y, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

export const Slider = () => (
  <Swiper
    // install Swiper modules
    modules={[Pagination]}
    spaceBetween={30}
    slidesPerView={4}
    pagination={{ clickable: true }}
    // centeredSlides={true}
    className="mySwiper"
  >
    <SwiperSlide>
      {/* <p className="paragraph2">
        Если вы увидите парня в Unie, который всегда рад вас видеть, всегда готов помочь с выбором и подсказать, какой
        кофе сегодня на фильтре, а какое пиво на кране, то знайте, что это Никита!
      </p>
      <button>Подробнее</button>
      <Image src={'/nikita.jpg'} alt={'nikitas photo'} width={270} height={360} />
      <div className={styles.soсials}>
        <h2 className="h2">Никита</h2>
        <button>instagram</button>
        <button>VK</button>
      </div>
    </SwiperSlide> */}

      <Image src={'/nikita.jpg'} alt={'nikitas photo'} width={270} height={360} />
    </SwiperSlide>

    <SwiperSlide>
      <Image src={'/nikita.jpg'} alt={'nikitas photo'} width={270} height={360} />
    </SwiperSlide>
    <SwiperSlide>
      <Image src={'/nikita.jpg'} alt={'nikitas photo'} width={270} height={360} />
    </SwiperSlide>
    <SwiperSlide>
      <Image src={'/nikita.jpg'} alt={'nikitas photo'} width={270} height={360} />
    </SwiperSlide>
    <SwiperSlide>
      <Image src={'/nikita.jpg'} alt={'nikitas photo'} width={270} height={360} />
    </SwiperSlide>
    <SwiperSlide>
      <Image src={'/nikita.jpg'} alt={'nikitas photo'} width={270} height={360} />
    </SwiperSlide>
  </Swiper>
);
