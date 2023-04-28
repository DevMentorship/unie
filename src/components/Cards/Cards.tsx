import cn from 'classnames';
import Image from 'next/image';

import styles from '@/components/Cards/Cards.module.css';

export const Cards = () => (
  // const cards = [
  //     {
  //         photo: '/matcha.jpg',
  //         text: 'Матча или маття'
  //     },
  //     {        photo: '/english.jpg',
  //     text: 'English clubs'},
  // ];

  <section className="container">
    <div className={styles.cardsBlock}>
      <h2 className="heading2">Другие новости</h2>

      <div className={cn(styles.cardColumn)}>
        <div className={styles.card}>
          <Image className={styles.img} src={'/matcha.jpg'} alt={''} width={210} height={280} />
          <p>Матча или маття </p>
        </div>
        <div className={styles.card}>
          <Image className={styles.img} src={'/matcha.jpg'} alt={''} width={210} height={280} />
          <p>Матча или маття </p>
        </div>
      </div>

      <div className={cn(styles.cardColumn, styles.column1)}>
        <div className={styles.card}>
          <Image className={styles.img} src={'/matcha.jpg'} alt={''} width={210} height={280} />
          <p>Матча или маття </p>
        </div>
      </div>
    </div>
  </section>
);
