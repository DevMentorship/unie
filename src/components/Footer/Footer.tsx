// import cn from 'classnames';
import Image from 'next/image';

import styles from '@/components/Footer/Footer.module.css';

// const pages = [
//   { label: 'Новости', href: '/posts' },
//   { label: 'UNIE', href: '/' },
//   { label: 'Меню', href: '/menu' },
// ];

export const Footer = () => (
  <section className="container">
    <div className={styles.footer}>
      <div className={styles.blocks}>
        <div className={styles.logo}>
          <Image className={styles.image} src={'/logo.svg'} alt={'logo'} width={114} height={114} />
        </div>
        <nav className={styles.menu}>
          <ul className={styles.list}>
            <li className={styles.link}>Главная</li>
            <li className={styles.link}>Меню</li>
            <li className={styles.link}>Новости</li>
          </ul>
        </nav>
        <div className={styles.socials}>
          <button className={styles.icons}>
            <Image className={styles.image} src={'/instagram.svg'} alt={'socials'} width={40} height={40} />
          </button>

          <button className={styles.icons}>
            <Image className={styles.image} src={'/vk.svg'} alt={'socials'} width={40} height={40} />
          </button>
        </div>
      </div>
    </div>
  </section>
);

/* {pages.map(({ label, href }, index) => (
        <Link href={href} key={index} className={styles.link}>
          {label}
        </Link>
      ))} */
