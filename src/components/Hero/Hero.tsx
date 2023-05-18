import cn from 'classnames';
import Image from 'next/image';

import { urlFor } from '@/lib/client';

import styles from './Hero.module.css';

export interface IHero {
  _id: string;
  title: string;
  description: string;
  image: string;
}

export const Hero = ({ hero }: { hero: IHero[] }) => (
  <section className="container">
    {hero.map((heroElem) => (
      <div key={heroElem._id} className={styles.heroContainer}>
        <div className={styles.text}>
          <h2 className={cn(styles.title, 'h2')}>{heroElem.title}</h2>
          <p className={cn(styles.title, 'h2')}>{heroElem.description}</p>
        </div>
        <Image
          className={cn(styles.image, 'image')}
          src={urlFor(heroElem.image).url()}
          width={1024}
          height={281}
          alt={heroElem.title}
        />
      </div>
    ))}
  </section>
);
