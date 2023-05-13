import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';

import styles from '@/components/Footer/Footer.module.css';

const pages = [
  { label: 'UNIE', href: '/' },
  { label: 'Новости', href: '/posts' },
  { label: 'Меню', href: '/menu' },
];

export const Footer = () => (
  <footer className={cn('container', styles.wrapper)}>
    <div className={styles.footer}>
      <div className={styles.blocks}>
        <div className={styles.logo}>
          <Link href="/">
            <Image className={styles.image} src={'/logo.svg'} alt={'logo'} width={114} height={114} />
          </Link>
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
  </footer>
);
