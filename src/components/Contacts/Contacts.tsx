import Image from 'next/image';

import styles from '@/components/Contacts/Contacts.module.css';

export const Contacts = () => (
  <section className="container">
    <div className={styles.blocks}>
      <div className={styles.contacts}>
        <h1 className={styles.h1}>Mы ждём вас!</h1>
        <div className={styles.block1}>
          <div className={styles.address}>
            <h4>Мы работаем для вас ежедневно по адресу:</h4>
            <h4 className={styles.paragraph}>г. Самара, ул. Стара Загора, д. 27</h4>
          </div>
          <div className={styles.time}>
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
      <div className={styles.image}>
        <Image src="/people.jpg" alt={''} width={467} height={467} />
      </div>
    </div>
  </section>
);
