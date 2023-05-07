import Image from 'next/image';

import styles from '@/components/Cards/Cards.module.css';

export const Cards = () => {
  const cards = [
    {
      image: 'matcha',
      title: 'Матча или маття',
    },
    {
      image: 'cans',
      title: 'Потенциально опасный контент 18+',
    },
    {
      image: 'vacancy',
      title: 'Открытые вакансии',
    },
    {
      image: 'coffee',
      title: 'Дрип-кофе',
    },
    {
      image: 'english',
      title: 'English clubs',
    },
    {
      image: 'soup',
      title: 'Суп дня',
    },
    {
      image: 'drinks',
      title: 'Холодные напитки',
    },
    {
      image: 'breakfast',
      title: 'Завтраки',
    },
  ];

  return (
    <section className="container">
      <h2 className={styles.h2}>Другие новости</h2>

      <div className={styles.cards}>
        {cards.map(({ image, title }, index) => (
          <div key={index} className={styles.card}>
            <Image className={styles.image} src={`/${image}.jpg`} alt={image} width={230} height={350} />
            <div className={styles.inner}>
              <h3 className={styles.h3}>{title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
