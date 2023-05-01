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
    <div className={styles.block}>
      <h2 className="heading2">Другие новости</h2>
      <div className={styles.columns}>
        <div className={cn(styles.column1)}>
          <div className={styles.card}>
            <Image className={styles.img} src={'/matcha.jpg'} alt={''} width={210} height={280} />
            <h3>Матча или маття</h3>
          </div>
          <div className={styles.card}>
            <Image className={styles.img} src={'/english.jpg'} alt={''} width={210} height={280} />
            <h3>English clubs</h3>
          </div>
        </div>

        <div className={styles.column2}>
          <div className={styles.card}>
            <Image className={styles.img} src={'/cans.jpg'} alt={''} width={210} height={280} />
            <h3>Потенциально опасный контент 18+</h3>
          </div>
          <div className={styles.card}>
            <Image className={styles.img} src={'/soup.jpg'} alt={''} width={210} height={280} />
            <h3>Суп дня</h3>
          </div>
        </div>
        <div className={styles.column3}>
          <div className={styles.card}>
            <Image className={styles.img} src={'/vacancy.jpg'} alt={''} width={210} height={280} />
            <h3>Открытые вакансии</h3>
          </div>
          <div className={styles.card}>
            <Image className={styles.img} src={'/drinks.jpg'} alt={''} width={210} height={280} />
            <h3>Холодные напитки</h3>
          </div>
        </div>
        <div className={styles.column4}>
          <div className={styles.card}>
            <Image className={styles.img} src={'/coffee.jpg'} alt={''} width={210} height={280} />
            <h3>Дрип-кофе</h3>
          </div>
          <div className={styles.card}>
            <Image className={styles.img} src={'/breakfast.jpg'} alt={''} width={210} height={280} />
            <h3>Завтраки</h3>
          </div>
        </div>
      </div>
    </div>
  </section>
);
