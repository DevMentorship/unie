import Image from 'next/image';

import useElementOnScreen from '@/hooks/useElementOnScreen';
import { urlFor } from '@/lib/client';

export interface IMenu {
  _id: string;
  mainImage: string;
  description: string;
}

export interface IProps {
  menu: IMenu[];
}

export const Menu = ({ menu }: IProps) => {
  const { ref } = useElementOnScreen();

  return (
    <section ref={ref}>
      <h2 className="invisible-child" data-child>
        Menu
      </h2>
      <ul className="invisible-child" data-child>
        {menu?.map(({ _id, mainImage, description }: IMenu) => (
          <li key={_id}>
            {mainImage && <Image src={urlFor(mainImage).url()} width="210" height="280" alt="" />}
            <h2>{description}</h2>
          </li>
        ))}
      </ul>
    </section>
  );
};
