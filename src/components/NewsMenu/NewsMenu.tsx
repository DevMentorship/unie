import Image from 'next/image';
import React from 'react';

import { urlFor } from '../../lib/client';
import { IMenu, IMenus } from './NewsMenu.interface';

export const NewsMenu = ({ menus }: IMenus) => (
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
);
