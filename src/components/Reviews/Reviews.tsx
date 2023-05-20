import cn from 'classnames';
import Image from 'next/image';
import { Navigation, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import styles from '@/components/Reviews/Reviews.module.css';
import useElementOnScreen from '@/hooks/useElementOnScreen';

export const Reviews = () => {
  const { ref } = useElementOnScreen();

  const reviews = [
    { image: '/review4.jpg' },
    { image: '/review5.jpg' },
    { image: '/review2.jpg' },
    { image: '/review5.jpg' },
    { image: '/review4.jpg' },
    { image: '/review5.jpg' },
    { image: '/review2.jpg' },
  ];

  return (
    <section className="container" ref={ref}>
      <h2 className={cn(styles.h2, 'invisibleChild')} data-child>
        Отзывы
      </h2>
      <Swiper
        data-child
        centeredSlides={true}
        modules={[Navigation, Scrollbar]}
        spaceBetween={100}
        slidesPerView={1}
        navigation={{
          nextEl: '.next',
          prevEl: '.prev',
        }}
        className={cn(styles.slider, 'invisibleChild')}
        loop={true}
        breakpoints={{
          768: {
            slidesPerView: 3,
          },
        }}
        // TODO: fix coverflow effect
        effect="coverflow"
        coverflowEffect={{
          rotate: 30,
          slideShadows: false,
        }}
        // TODO: fix autoplay
        autoplay={{
          delay: 2000,
          disableOnInteraction: true,
        }}
      >
        {reviews.map((review, index) => (
          <SwiperSlide className={styles.slider} key={index}>
            <div className={styles.review}>
              <Image
                className={styles.image}
                src={review.image}
                alt={review.image}
                width={0}
                height={0}
                sizes="100vw"
                unoptimized
              />
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
