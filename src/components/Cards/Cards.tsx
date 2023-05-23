import { FC } from 'react';

import styles from '@/components/Cards/Cards.module.css';

import { Card } from '../Card/Card';

export interface INews {
  _id: string;
  title: string;
  mainImage: string;
}

export const Cards = ({ news }: { news: INews[] }) => (
  <section className="container">
    <h2 className={styles.h2}>Другие новости</h2>
    <div className={styles.cards}>
      {news.map((item: INews) => (
        <Card key={item._id} {...item} />
      ))}
    </div>
  </section>
);
