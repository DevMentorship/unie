import cn from 'classnames';
import Image from 'next/image';

import styles from '@/components/Cards/Cards.module.css';
import useElementOnScreen from '@/hooks/useElementOnScreen';

export const Cards = () => {
  const { ref } = useElementOnScreen();

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
    <section className="container" ref={ref}>
      <h2 className={cn(styles.h2, 'invisible-child')} data-child>
        Другие новости
      </h2>

      <div className={cn(styles.cards, 'invisible-child')} data-child>
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
