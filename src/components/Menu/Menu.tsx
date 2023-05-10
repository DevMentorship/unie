import cn from 'classnames';
import Image from 'next/image';
import { Key } from 'react';

import styles from '@/components/Menu/Menu.module.css';

export const Menu = () => {
  const menus = [
    {
      menu: 'Основное меню',
      image: 'food',
      name: 'Гай Unie Цезарь',
      description:
        'Unie не был бы Unie, если бы не сочетал в себе традиции и наш фирменный стиль. Традиционный рецепт с нашим уникальным соусом и запеченной курицей.',
    },
    {
      menu: 'Основное меню',
      image: 'food',
      name: 'Гай Unie Цезарь',
      description:
        'Unie не был бы Unie, если бы не сочетал в себе традиции и наш фирменный стиль. Традиционный рецепт с нашим уникальным соусом и запеченной курицей.',
    },
    {
      menu: 'Основное меню',
      image: 'food',
      name: 'Гай Unie Цезарь',
      description:
        'Unie не был бы Unie, если бы не сочетал в себе традиции и наш фирменный стиль. Традиционный рецепт с нашим уникальным соусом и запеченной курицей.',
    },
    {
      menu: 'Основное меню',
      image: 'food',
      name: 'Гай Unie Цезарь',
      description:
        'Unie не был бы Unie, если бы не сочетал в себе традиции и наш фирменный стиль. Традиционный рецепт с нашим уникальным соусом и запеченной курицей.',
    },
  ];

  return (
    <section className="container">
      <h2 className={styles.h2}>Наше меню</h2>

      <h3 className={styles.h3}>Основное меню</h3>
      <hr />

      {menus.map(({ image, name, description }, index) => (
        <div key={index}>
          <div className={styles.wrapper}>
            <div>
              <Image className={styles.image} src={`/${image}.jpg`} alt={''} height={196} width={196} />
            </div>

            <div className={styles.about}>
              <div className={styles.block1}>
                <h3>{name}</h3>
                <h4 className={styles.h4}>{description}</h4>
                <h4 className={styles.h4}>Белки: 27г | Жиры: 12г | Углеводы: 10г</h4>
                <h4 className={styles.h4}>Калорийность: 281 ккал</h4>
              </div>
              <div className={styles.block2}>
                <h4 className={cn(styles.gramms, styles.h4)}>180г</h4>
                <h3 className={styles.h3}>290p.</h3>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

// import { urlFor } from '@/lib/client';

// export interface IMenu {
//   _id: string;
//   mainImage: string;
//   description: string;
// }

// export interface IProps {
//   menu: IMenu[];
// }

// export const Menu = ({ menu }: IProps) => (
//   <section>
//     <h2>Menu</h2>
//     <ul>
//       {menu?.map(({ _id, mainImage, description }: IMenu) => (
//         <li key={_id}>
//           <Image src={urlFor(mainImage).url()} width="210" height="280" alt="" />
//           <h2>{description}</h2>
//         </li>
//       ))}
//     </ul>
//   </section>
// );
