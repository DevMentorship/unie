import Image from 'next/image';

import styles from '@/components/Team/Team.module.css';

import { Slider } from '../Slider/Slider';

export const Team = () => (
  <section className="container">
    <h2 className="h2">Наша команда</h2>
    <p>
      Мы настоящая кофейная семья профессионалов своего дела, где каждый человек - личность, объединяет которых
      исключительный кофе и стремление развивать культуру спешиалити кофе.
    </p>

    <Slider />
  </section>
);
