import Image from 'next/image';
import Link from 'next/link';

import styles from '@/components/Header/Header.module.css';

const pages = [
  { label: 'UNIE', href: '/' },
  { label: 'Новости', href: '/posts' },
  { label: 'Меню', href: '/menu' },
];

export const Header = () => (
  <header className="container">
    <div className={styles.header}>
      <div className={styles.blocks}>
        <div className={styles.logo}>
          <Link href="/">
            <Image className={styles.image} src={'/logo.svg'} alt={'logo'} width={80} height={80} />
          </Link>
        </div>

        <div className={styles.contacts}>
          <div className={styles.address}>
            <Image className={styles.image} src={'/position.svg'} alt={'position'} width={25} height={25} />
            <p>
              <strong>Самара</strong>
              <span className={styles.text}>Стара Загора 27</span>
            </p>
          </div>
          <div className={styles.phone}>
            <Image className={styles.image} src={'/phone.svg'} alt={'phone'} width={25} height={25} />
            <p>
              <a href="tel:+79371846464">+7 (937) 184-64-64</a>
            </p>
          </div>
        </div>
      </div>
      <div className={styles.burger}>
        <span></span>
      </div>
      <nav className={styles.menu}>
        <ul className={styles.list}>
          {pages.map(({ label, href }, index) => (
            <li key={index}>
              <Link href={href} className={styles.link}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  </header>
);
