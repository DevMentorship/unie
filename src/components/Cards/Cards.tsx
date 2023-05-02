import cn from 'classnames';
import Image from 'next/image';

import styles from '@/components/Cards/Cards.module.css';

export const Cards = () => (
  <section className="container">
    <h2 className={styles.h2}>Другие новости</h2>

    <div className={styles.cards}>
      <div className={styles.card}>
        <Image className={styles.image} src={'/matcha.jpg'} alt={''} width={210} height={280} />
        <div className={styles.background}></div>
        <h3 className={styles.h3}>Матча или маття </h3>
      </div>
    </div>
  </section>
);
