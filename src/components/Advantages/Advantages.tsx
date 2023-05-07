import Image from 'next/image';

import styles from '@/components/Advantages/Advantages.module.css';

export const Advantages = () => {
  const blocks = [
    {
      icon: 'delivery',
      title: 'Быстрая доставка',
      text: 'В любую точку города в день заказа и в удобное время',
    },
    {
      icon: 'cup',
      title: 'Только свежие ингредиенты',
      text: 'Мы тщательно следим за качеством нашей продукции',
    },
    {
      icon: 'menu',
      title: 'Выбор на любой вкус',
      text: 'Большой выбор кофе, десертов и меню кухни',
    },
    {
      icon: 'discount',
      title: 'Скидки и накопления',
      text: 'Скидки, баллы на ваш счёт после каждо покупки',
    },
  ];

  return (
    <section className="container">
      <h2 className="h2 bold">Почему именно мы?</h2>

      <div className={styles.blocks}>
        {blocks.map(({ title, icon, text }, index) => (
          <div key={index} className={styles.block}>
            <Image src={`/${icon}.svg`} alt={icon} width={55} height={55} />

            <h3 className="bold">{title}</h3>

            <p>{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
