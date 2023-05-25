import cn from 'classnames';
import Image from 'next/image';
import { Autoplay, Navigation, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import styles from '@/components/Reviews/Reviews.module.css';
import useElementOnScreen from '@/hooks/useElementOnScreen';
import { urlFor } from '@/lib/client';

export interface IReview {
  image: string;
}
export const Reviews = ({ reviews }: { reviews: IReview[] }) => {
  const { ref } = useElementOnScreen();

  return (
    <section className="container" ref={ref}>
      <h2 className={cn('h1', styles.h2, 'invisible-child')} data-child>
        Отзывы
      </h2>
      <Swiper
        centeredSlides={true}
        modules={[Navigation, Scrollbar, Autoplay]}
        spaceBetween={100}
        slidesPerView={1}
        navigation={{
          nextEl: '.next',
          prevEl: '.prev',
        }}
        className="invisible-child"
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
        data-child
      >
        {reviews.map(({ image }, index) => (
          <SwiperSlide key={index}>
            <div className={styles.review}>
              <Image
                className={styles.image}
                src={urlFor(image).url()}
                alt="отзыв"
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
