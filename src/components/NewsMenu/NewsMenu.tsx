import Head from 'next/head';
import Image from 'next/image';

import { urlFor } from '../../lib/client';

export interface IMenu {
  _id: string;
  mainImage: string;
  description: string;
}

export interface IMenus {
  menus: IMenu[];
}

export const NewsMenu = ({ menus }: IMenus) => (
  <>
    <Head>
      <title>Unie - Новости</title>
    </Head>
    <div>
      <h1>Menus</h1>
      <ul>
        {menus &&
          menus.map((menu: IMenu) => (
            <li key={menu._id}>
              <Image src={urlFor(menu.mainImage).url()} width="210" height="280" alt={menu.description} />
              <h2>{menu.description}</h2>
            </li>
          ))}
      </ul>
    </div>
  </>
);
