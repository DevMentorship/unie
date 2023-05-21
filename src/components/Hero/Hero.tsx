import cn from 'classnames';
import Image from 'next/image';

import { urlFor } from '@/lib/client';

import styles from './Hero.module.css';

export interface IHero {
  title: string;
  description: string;
  image: string;
}

export const Hero = ({ hero }: { hero: IHero[] }) => (
  <section className={styles['hero-wrapper']}>
    {hero.map(({ title, description, image }, index) => (
      <div key={index} className={styles.hero}>
        <div className={styles.text}>
          <h2 className={cn(styles.title, 'h1')}>{title}</h2>
          <p className={cn(styles.title, 'h2')}>{description}</p>
        </div>
        <Image className={cn(styles.image, 'image')} src={urlFor(image).url()} width={1024} height={281} alt={title} />
      </div>
    ))}
  </section>
);
