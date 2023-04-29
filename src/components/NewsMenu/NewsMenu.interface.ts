export interface IMenu {
  _id: string;
  mainImage: string;
  description: string;
}

export interface IMenus {
  menus: IMenu[];
}
