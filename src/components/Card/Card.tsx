import Image from 'next/image';

import styles from '@/components/Card/Card.module.css';

import { urlFor } from '../../lib/client';
import { INews } from '../Cards/Cards';

export const Card = (item: INews) => (
  <div className={styles.card}>
    <Image className={styles.image} src={urlFor(item.mainImage).url()} alt={item.title} width={230} height={350} />
    <div className={styles.inner}>
      <h3 className={styles.h3}>{item.title}</h3>
    </div>
  </div>
);
