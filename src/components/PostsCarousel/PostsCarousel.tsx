import cn from 'classnames';
import Image from 'next/image';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import styles from '@/components/PostsCarousel/PostsCarousel.module.css';
import { urlFor } from '@/lib/client';
import { IPost } from '@/pages/post/[slug]';

export const PostsCarousel = ({ posts }: { posts: IPost[] }) => (
  <section className={cn('container', styles['slider-wrapper'])}>
    <Swiper
      modules={[Navigation]}
      slidesPerView={1}
      centeredSlides={true}
      className={styles.slider}
      autoHeight={true}
      loop={true}
      navigation={{
        nextEl: '.next',
        prevEl: '.prev',
      }}
    >
      {posts.map((post) => (
        <SwiperSlide key={post._id}>
          <div className={styles['image-wrapper']}>
            <Image
              src={urlFor(post.mainImage).url()}
              width="600"
              height="400"
              alt={post.title}
              className={styles.image}
            />
          </div>
          <div className={styles.buttons}>
            <button className={cn(styles.prev, 'prev')} aria-label="Кнопка Предыдущая новость">
              <span className="visually-hidden">Prev Slide</span>
              <Image src="/arrow.svg" alt="prev arrow" width={30} height={30} />
            </button>
            <button className={cn(styles.next, 'next')} aria-label="Кнопка Следующая новость">
              <span className="visually-hidden">Next Slide</span>
              <Image src="/arrow.svg" alt="next arrow" width={30} height={30} />
            </button>
          </div>
          <p className={cn(styles.title, 'h1', 'bold')}>{post.title}</p>
          <p className={cn(styles.description, 'h3')}>{post.description}</p>
          <p className={cn(styles.body, 'h3')}>{post.body}</p>
          <p className={styles.publishedAt}>{post.publishedAt}</p>
        </SwiperSlide>
      ))}
    </Swiper>
  </section>
);
