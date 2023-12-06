import { MenuCategoryItem } from './menuCategoryItem.model';

export interface POSModel {
  waiter: WaiterDetails;
  tables: Table[];
}

export interface Table {
  tableNumber: number;
  selected: boolean;
  menuItems: MenuCategoryItem[];
}

export interface WaiterDetails {
  name: string;
  selected: boolean;
}
