import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import cn from 'classnames';
import Image from 'next/image';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import styles from '@/components/Reviews/Reviews.module.css';

export const Reviews = () => {
  const reviews = [
    {
      image: '/review1.jpg',
      width: 507,
      height: 203,
    },
    {
      image: '/review2.jpg',
      width: 407,
      height: 240,
    },
    {
      image: '/review3.jpg',
      width: 465,
      height: 203,
    },
    {
      image: '/review4.jpg',
      width: 456,
      height: 177,
    },
  ];

  return (
    <section className="container">
      <h2 className={styles.h2}>Отзывы</h2>
      <Swiper
        modules={[Navigation, Scrollbar]}
        spaceBetween={30}
        slidesPerView={3}
        navigation={{
          nextEl: '.next',
          prevEl: '.prev',
        }}
        className={styles.slider}
        loop={true}
      >
        {reviews.map((review, index) => (
          <SwiperSlide className={styles.slider} key={index}>
            <div className={styles.review}>
              <Image className={styles.image} src={review.image} alt={review.image} width={407} height={240} />
            </div>
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
    </section>
  );
};
