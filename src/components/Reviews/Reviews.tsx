import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

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
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={30}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        className={styles.slider}
        loop={true}
      >
        {reviews.map((review, index) => (
          <SwiperSlide className={styles.slider} key={index}>
            <div className={styles.review}>
              <Image src={review.image} alt={review.image} width={review.width} height={review.height} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
