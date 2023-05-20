import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';

import styles from '@/components/Footer/Footer.module.css';
import useElementOnScreen from '@/hooks/useElementOnScreen';

const pages = [
  { label: 'UNIE', href: '/' },
  { label: 'Новости', href: '/posts' },
  { label: 'Меню', href: '/menu' },
];

export const Footer = () => {
  const { ref } = useElementOnScreen();

  return (
    <footer className={cn('container', styles.wrapper)} ref={ref}>
      <div className={cn(styles.footer, 'invisibleChild')} data-child>
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
};
