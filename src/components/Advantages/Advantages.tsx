import cn from 'classnames';
import Image from 'next/image';

import styles from '@/components/Advantages/Advantages.module.css';
import useElementOnScreen from '@/hooks/useElementOnScreen';

export const Advantages = () => {
  const { ref } = useElementOnScreen();

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

      <div className={styles.blocks} ref={ref}>
        {blocks.map(({ title, icon, text }, index) => (
          <div key={index} className={cn(styles.block, 'invisible-child')} data-child>
            <Image src={`/${icon}.svg`} alt={icon} width={55} height={55} />

            <h3 className="bold">{title}</h3>

            <p>{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
