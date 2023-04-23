/* eslint-disable arrow-body-style */
/* eslint-disable simple-import-sort/imports */
import styles from '@/components/Advantages/Advantages.module.css';
import cn from 'classnames';
import Image from 'next/image';

export const Advantages = () => {
  return (
    <section className={cn(styles.advantages, 'container')}>
      <h2>Почему именно мы?</h2>
      <div className={styles.block}>
        <div className={styles.block2}>
          <Image src="/delivery.svg" alt={'delivery icon'} width={55} height={55} />
          <h4>Быстрая доставка</h4>
          <p>В любую точку города в день заказа и в удобное время</p>
        </div>

        <div className={styles.block2}>
          <Image src="/cup.svg" alt={'cup icon'} width={55} height={55} />
          <h4>Только свежие ингредиенты</h4>
          <p>Мы тщательно следим за качеством нашей продукции</p>
        </div>

        <div className={styles.block2}>
          <Image src="/menu.svg" alt={'menu icon'} width={55} height={55} />
          <h4>Выбор на любой вкус</h4>
          <p>Большой выбор кофе, десертов и меню кухни</p>
        </div>

        <div className={styles.block2}>
          <Image src="/discount.svg" alt={'discount icon'} width={55} height={55} />
          <h4>Скидки и накопления</h4>
          <p>Скидки, баллы на ваш счёт после каждо покупки</p>
        </div>
      </div>
    </section>
  );
};
