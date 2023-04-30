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

      <div className={styles.cardColumn1}>
        <div className={styles.card}>
          <Image className={styles.img} src={'/matcha.jpg'} alt={''} width={210} height={280} />
          <h2>Матча или маття </h2>
        </div>
        <div className={styles.card}>
          <Image className={styles.img} src={'/matcha.jpg'} alt={''} width={210} height={280} />
          <h2>Матча или маття </h2>
        </div>
      </div>

      <div className={styles.cardColumn2}>
        <div className={styles.card}>
          <Image className={styles.img} src={'/matcha.jpg'} alt={''} width={210} height={280} />
          <h2>Матча или маття </h2>
        </div>

        <div className={styles.card}>
          <Image className={styles.img} src={'/matcha.jpg'} alt={''} width={210} height={280} />
          <h2>Матча или маття </h2>
        </div>
      </div>
      <div className={styles.cardColumn3}>
        <div className={styles.card}>
          <Image className={styles.img} src={'/matcha.jpg'} alt={''} width={210} height={280} />
          <h2>Матча или маття </h2>
        </div>

        <div className={styles.card}>
          <Image className={styles.img} src={'/matcha.jpg'} alt={''} width={210} height={280} />
          <h2>Матча или маття </h2>
        </div>
      </div>
      <div className={styles.cardColumn4}>
        <div className={styles.card}>
          <Image className={styles.img} src={'/matcha.jpg'} alt={''} width={210} height={280} />
          <h2>Матча или маття </h2>
        </div>

        <div className={styles.card}>
          <Image className={styles.img} src={'/matcha.jpg'} alt={''} width={210} height={280} />
          <h2>Матча или маття </h2>
        </div>
      </div>
    </div>
  </section>
);
