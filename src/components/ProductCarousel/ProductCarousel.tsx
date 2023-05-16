import cn from 'classnames';
import Image from 'next/image';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import styles from '@/components/ProductCarousel/ProductCarousel.module.css';
import { urlFor } from '@/lib/client';
import { IPost } from '@/pages/post/[slug]';

export const ProductCarousel = ({ posts }: { posts: IPost[] }) => (
  <section className="container">
    <Swiper
      modules={[Navigation]}
      spaceBetween={0}
      slidesPerView={1}
      direction="horizontal"
      centeredSlides={true}
      className={styles.slider}
      loop={true}
      navigation={{
        nextEl: '.next',
        prevEl: '.prev',
      }}
    >
      {posts.map((post) => (
        <SwiperSlide key={post._id}>
          <Image
            src={urlFor(post.mainImage).url()}
            width="575"
            height="406"
            alt={post.title}
            className={styles.image}
          />
          <p className={styles.title}>{post.title}</p>
          <p className={styles.description}>{post.description}</p>
          <p className={styles.body}>{post.body}</p>
          <p className={styles.publishedAt}>{post.publishedAt}</p>
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
