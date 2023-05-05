import Image from 'next/image';
import Link from 'next/link';

import styles from '@/components/Header/Header.module.css';

const pages = [
  { label: 'Новости', href: '/posts' },
  { label: 'UNIE', href: '/' },
  { label: 'Меню', href: '/menu' },
];

export const Header = () => (
  <section className="container">
    <div className={styles.header}>
      <div className={styles.blocks}>
        <div className={styles.logo}>
          <Image className={styles.image} src={'/logo.svg'} alt={'logo'} width={80} height={80} />
        </div>
        <div className={styles.contacts}>
          <div className={styles.address}>
            <Image className={styles.image} src={'/position.svg'} alt={'position'} width={25} height={25} />
            <p>Самара</p>
            <p>Стара Загора 27</p>
          </div>
          <div className={styles.phone}>
            <Image className={styles.image} src={'/phone.svg'} alt={'phone'} width={25} height={25} />
            <p>+7 (937) 184-64-64</p>
          </div>
        </div>
      </div>
      <div className={styles.menu}>
        <div className={styles.buttons}>
          <button className={styles.button}>Главная</button>
          <button className={styles.button}>Новости</button>
          <button className={styles.button}>Меню</button>
        </div>
      </div>
    </div>
  </section>

  /* {pages.map(({ label, href }, index) => (
      <Link href={href} key={index} className={styles.link}>
        {label}
      </Link>
    ))} */
);
