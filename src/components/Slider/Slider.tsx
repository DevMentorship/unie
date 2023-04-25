import 'swiper/css';
import 'swiper/css/bundle';

import Image from 'next/image';
import { A11y, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import styles from '@/components/Slider/Slider.module.css';

export const Slider = () => (
  <Swiper
    // install Swiper modules
    modules={[Pagination, A11y]}
    spaceBetween={30}
    slidesPerView={4}
    pagination={{ clickable: true }}
    // centeredSlides={true}
    className="mySwiper"
  >
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
    <div className={styles.team}>
      <SwiperSlide>
        <div className={styles.team_blocks}>
          <Image src={'/nikita.jpg'} alt={'nikitas photo'} width={270} height={360} />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className={styles.team_blocks}>
          <Image src={'/nikita.jpg'} alt={'nikitas photo'} width={270} height={360} />
        </div>
      </SwiperSlide>
    </div>
  </Swiper>
);
