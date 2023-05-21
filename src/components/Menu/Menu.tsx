import cn from 'classnames';
import Image from 'next/image';

import styles from '@/components/Menu/Menu.module.css';

export interface IMenu {
  image: string;
  name: string;
  description: string;
}

export const Menu = ({ menu }: { menu: IMenu[] }) => (
  <section className="container">
    <h2 className={styles.h2}>Наше меню</h2>

    <h3 className={styles.h3}>Основное меню</h3>
    <hr />

    {menu.map(({ image, name, description }, index) => (
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
