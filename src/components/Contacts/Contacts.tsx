import cn from 'classnames';
import Image from 'next/image';

import styles from '@/components/Contacts/Contacts.module.css';
import useElementOnScreen from '@/hooks/useElementOnScreen';

export const Contacts = () => {
  const { ref } = useElementOnScreen();

  return (
    <section className={cn('container', styles.blocks)} ref={ref}>
      <div className={cn(styles.contacts, 'invisible-child')} data-child>
        <div>
          <h3 className={styles.h1}>Mы ждём вас!</h3>
          <div className={styles.address}>
            <h4>Мы работаем для вас ежедневно по адресу:</h4>
            <address className={styles.paragraph}>г. Самара, ул. Стара Загора, д. 27</address>
          </div>
          <div>
            <h4>Режим работы:</h4>
            <ul className={styles.paragraph}>
              <li>Пн-Чт 8:00 - 22:00</li>
              <li>Пт 8:00 - 0:00</li>
              <li>Сб 10:00 - 0:00</li>
              <li>Вс 10:00 - 22:00</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={cn(styles.image, 'invisible-child')} data-child>
        <Image src="/people.jpg" alt={''} width={467} height={467} />
      </div>
    </section>
  );
};
