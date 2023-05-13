import Image from 'next/image';

import { urlFor } from '@/lib/client';

export interface IMenu {
  _id: string;
  mainImage: string;
  description: string;
}

export interface IProps {
  menu: IMenu[];
}

export const Menu = ({ menu }: IProps) => (
  <section>
    <h2>Menu</h2>
    <ul>
      {menu?.map(({ _id, mainImage, description }: IMenu) => (
        <li key={_id}>
          {mainImage && <Image src={urlFor(mainImage).url()} width="210" height="280" alt="" />}
          <h2>{description}</h2>
        </li>
      ))}
    </ul>
  </section>
);
