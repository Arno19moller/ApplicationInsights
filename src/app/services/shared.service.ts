import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import {
  Injectable,
  Signal,
  WritableSignal,
  computed,
  inject,
  signal,
} from '@angular/core';
import { Observable, map, shareReplay } from 'rxjs';
import { MenuCategoryItem } from '../components/models/menuCategoryItem.model';
import { POSModel } from '../components/models/pos.model';
import { Waiter } from '../components/models/waiter.model';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private breakpointObserver = inject(BreakpointObserver);
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe([Breakpoints.Small, Breakpoints.XSmall])
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  private selectedWaiterIndex = 0;
  private selectedTableIndex = 0;

  // Menu Items
  categoryItems: WritableSignal<MenuCategoryItem[]> = signal([]);
  totalSum: Signal<number | undefined> = computed(() => {
    return this.categoryItems()?.reduce((sum, item) => sum + item.total, 0);
  });
  selectedItems: Signal<MenuCategoryItem[] | undefined> = computed(() =>
    this.categoryItems()?.filter((item: MenuCategoryItem) => {
      return item.total > 0;
    })
  );

  // Waiters
  waiters: WritableSignal<Waiter[]> = signal([]);
  selectedWaiter: Signal<Waiter | undefined> = computed(() =>
    this.waiters().find((item: Waiter) => {
      return item.selected;
    })
  );

  // WaiterModel
  waiterModels: POSModel[] = [];

  constructor() {}

  public createWaiterModels() {
    this.waiterModels = [
      {
        waiter: {
          name: 'Leslie K.',
          selected: true,
        },
        tables: [
          {
            tableNumber: 1,
            selected: true,
            menuItems: [
              {
                breadcrumb: ['Orders', 'Kitchen'],
                title: 'Fish and Chips',
                price: 50,
                quantity: 0,
                total: 0,
                selected: false,
                icon: 'free_breakfast',
              },
              {
                breadcrumb: ['Orders', 'Kitchen'],
                title: 'Roast Chicken',
                price: 45,
                quantity: 0,
                total: 0,
                selected: false,
                icon: 'free_breakfast',
              },
              {
                breadcrumb: ['Orders', 'Kitchen'],
                title: 'Fillet Steak',
                price: 85,
                quantity: 0,
                total: 0,
                selected: false,
                icon: 'free_breakfast',
              },
              {
                breadcrumb: ['Orders', 'Kitchen'],
                title: 'Beefsteak',
                price: 81,
                quantity: 0,
                total: 0,
                selected: false,
                icon: 'free_breakfast',
              },
              {
                breadcrumb: ['Orders', 'Kitchen'],
                title: 'Roast Beef',
                price: 75,
                quantity: 0,
                total: 0,
                selected: false,
                icon: 'free_breakfast',
              },
              {
                breadcrumb: ['Orders', 'Kitchen'],
                title: 'Buffalo Wings',
                price: 78,
                quantity: 0,
                total: 0,
                selected: false,
                icon: 'free_breakfast',
              },
              {
                breadcrumb: ['Orders', 'Kitchen'],
                title: 'Lobster',
                price: 120,
                quantity: 0,
                total: 0,
                selected: false,
                icon: 'free_breakfast',
              },
              {
                breadcrumb: ['Orders', 'Kitchen'],
                title: 'Braaibroodjies',
                price: 25,
                quantity: 0,
                total: 0,
                selected: false,
                icon: 'free_breakfast',
              },
            ],
          },
          {
            tableNumber: 2,
            selected: false,
            menuItems: [
              {
                breadcrumb: ['Orders', 'Kitchen'],
                title: 'Fish and Chips',
                price: 50,
                quantity: 0,
                total: 0,
                selected: false,
                icon: 'free_breakfast',
              },
              {
                breadcrumb: ['Orders', 'Kitchen'],
                title: 'Roast Chicken',
                price: 45,
                quantity: 0,
                total: 0,
                selected: false,
                icon: 'free_breakfast',
              },
              {
                breadcrumb: ['Orders', 'Kitchen'],
                title: 'Fillet Steak',
                price: 85,
                quantity: 0,
                total: 0,
                selected: false,
                icon: 'free_breakfast',
              },
              {
                breadcrumb: ['Orders', 'Kitchen'],
                title: 'Beefsteak',
                price: 81,
                quantity: 0,
                total: 0,
                selected: false,
                icon: 'free_breakfast',
              },
              {
                breadcrumb: ['Orders', 'Kitchen'],
                title: 'Roast Beef',
                price: 75,
                quantity: 0,
                total: 0,
                selected: false,
                icon: 'free_breakfast',
              },
              {
                breadcrumb: ['Orders', 'Kitchen'],
                title: 'Buffalo Wings',
                price: 78,
                quantity: 0,
                total: 0,
                selected: false,
                icon: 'free_breakfast',
              },
              {
                breadcrumb: ['Orders', 'Kitchen'],
                title: 'Lobster',
                price: 120,
                quantity: 0,
                total: 0,
                selected: false,
                icon: 'free_breakfast',
              },
              {
                breadcrumb: ['Orders', 'Kitchen'],
                title: 'Braaibroodjies',
                price: 25,
                quantity: 0,
                total: 0,
                selected: false,
                icon: 'free_breakfast',
              },
            ],
          },
          {
            tableNumber: 3,
            selected: false,
            menuItems: [
              {
                breadcrumb: ['Orders', 'Kitchen'],
                title: 'Fish and Chips',
                price: 50,
                quantity: 0,
                total: 0,
                selected: false,
                icon: 'free_breakfast',
              },
              {
                breadcrumb: ['Orders', 'Kitchen'],
                title: 'Roast Chicken',
                price: 45,
                quantity: 0,
                total: 0,
                selected: false,
                icon: 'free_breakfast',
              },
              {
                breadcrumb: ['Orders', 'Kitchen'],
                title: 'Fillet Steak',
                price: 85,
                quantity: 0,
                total: 0,
                selected: false,
                icon: 'free_breakfast',
              },
              {
                breadcrumb: ['Orders', 'Kitchen'],
                title: 'Beefsteak',
                price: 81,
                quantity: 0,
                total: 0,
                selected: false,
                icon: 'free_breakfast',
              },
              {
                breadcrumb: ['Orders', 'Kitchen'],
                title: 'Roast Beef',
                price: 75,
                quantity: 0,
                total: 0,
                selected: false,
                icon: 'free_breakfast',
              },
              {
                breadcrumb: ['Orders', 'Kitchen'],
                title: 'Buffalo Wings',
                price: 78,
                quantity: 0,
                total: 0,
                selected: false,
                icon: 'free_breakfast',
              },
              {
                breadcrumb: ['Orders', 'Kitchen'],
                title: 'Lobster',
                price: 120,
                quantity: 0,
                total: 0,
                selected: false,
                icon: 'free_breakfast',
              },
              {
                breadcrumb: ['Orders', 'Kitchen'],
                title: 'Braaibroodjies',
                price: 25,
                quantity: 0,
                total: 0,
                selected: false,
                icon: 'free_breakfast',
              },
            ],
          },
        ],
      },
      {
        waiter: {
          name: 'Cameron W.',
          selected: false,
        },
        tables: [
          {
            tableNumber: 4,
            selected: true,
            menuItems: [
              {
                breadcrumb: ['Orders', 'Kitchen'],
                title: 'Fish and Chips',
                price: 50,
                quantity: 0,
                total: 0,
                selected: false,
                icon: 'free_breakfast',
              },
              {
                breadcrumb: ['Orders', 'Kitchen'],
                title: 'Roast Chicken',
                price: 45,
                quantity: 0,
                total: 0,
                selected: false,
                icon: 'free_breakfast',
              },
              {
                breadcrumb: ['Orders', 'Kitchen'],
                title: 'Fillet Steak',
                price: 85,
                quantity: 0,
                total: 0,
                selected: false,
                icon: 'free_breakfast',
              },
              {
                breadcrumb: ['Orders', 'Kitchen'],
                title: 'Beefsteak',
                price: 81,
                quantity: 0,
                total: 0,
                selected: false,
                icon: 'free_breakfast',
              },
              {
                breadcrumb: ['Orders', 'Kitchen'],
                title: 'Roast Beef',
                price: 75,
                quantity: 0,
                total: 0,
                selected: false,
                icon: 'free_breakfast',
              },
              {
                breadcrumb: ['Orders', 'Kitchen'],
                title: 'Buffalo Wings',
                price: 78,
                quantity: 0,
                total: 0,
                selected: false,
                icon: 'free_breakfast',
              },
              {
                breadcrumb: ['Orders', 'Kitchen'],
                title: 'Lobster',
                price: 120,
                quantity: 0,
                total: 0,
                selected: false,
                icon: 'free_breakfast',
              },
              {
                breadcrumb: ['Orders', 'Kitchen'],
                title: 'Braaibroodjies',
                price: 25,
                quantity: 0,
                total: 0,
                selected: false,
                icon: 'free_breakfast',
              },
            ],
          },
          {
            tableNumber: 5,
            selected: false,
            menuItems: [
              {
                breadcrumb: ['Orders', 'Kitchen'],
                title: 'Fish and Chips',
                price: 50,
                quantity: 0,
                total: 0,
                selected: false,
                icon: 'free_breakfast',
              },
              {
                breadcrumb: ['Orders', 'Kitchen'],
                title: 'Roast Chicken',
                price: 45,
                quantity: 0,
                total: 0,
                selected: false,
                icon: 'free_breakfast',
              },
              {
                breadcrumb: ['Orders', 'Kitchen'],
                title: 'Fillet Steak',
                price: 85,
                quantity: 0,
                total: 0,
                selected: false,
                icon: 'free_breakfast',
              },
              {
                breadcrumb: ['Orders', 'Kitchen'],
                title: 'Beefsteak',
                price: 81,
                quantity: 0,
                total: 0,
                selected: false,
                icon: 'free_breakfast',
              },
              {
                breadcrumb: ['Orders', 'Kitchen'],
                title: 'Roast Beef',
                price: 75,
                quantity: 0,
                total: 0,
                selected: false,
                icon: 'free_breakfast',
              },
              {
                breadcrumb: ['Orders', 'Kitchen'],
                title: 'Buffalo Wings',
                price: 78,
                quantity: 0,
                total: 0,
                selected: false,
                icon: 'free_breakfast',
              },
              {
                breadcrumb: ['Orders', 'Kitchen'],
                title: 'Lobster',
                price: 120,
                quantity: 0,
                total: 0,
                selected: false,
                icon: 'free_breakfast',
              },
              {
                breadcrumb: ['Orders', 'Kitchen'],
                title: 'Braaibroodjies',
                price: 25,
                quantity: 0,
                total: 0,
                selected: false,
                icon: 'free_breakfast',
              },
            ],
          },
          {
            tableNumber: 6,
            selected: false,
            menuItems: [
              {
                breadcrumb: ['Orders', 'Kitchen'],
                title: 'Fish and Chips',
                price: 50,
                quantity: 0,
                total: 0,
                selected: false,
                icon: 'free_breakfast',
              },
              {
                breadcrumb: ['Orders', 'Kitchen'],
                title: 'Roast Chicken',
                price: 45,
                quantity: 0,
                total: 0,
                selected: false,
                icon: 'free_breakfast',
              },
              {
                breadcrumb: ['Orders', 'Kitchen'],
                title: 'Fillet Steak',
                price: 85,
                quantity: 0,
                total: 0,
                selected: false,
                icon: 'free_breakfast',
              },
              {
                breadcrumb: ['Orders', 'Kitchen'],
                title: 'Beefsteak',
                price: 81,
                quantity: 0,
                total: 0,
                selected: false,
                icon: 'free_breakfast',
              },
              {
                breadcrumb: ['Orders', 'Kitchen'],
                title: 'Roast Beef',
                price: 75,
                quantity: 0,
                total: 0,
                selected: false,
                icon: 'free_breakfast',
              },
              {
                breadcrumb: ['Orders', 'Kitchen'],
                title: 'Buffalo Wings',
                price: 78,
                quantity: 0,
                total: 0,
                selected: false,
                icon: 'free_breakfast',
              },
              {
                breadcrumb: ['Orders', 'Kitchen'],
                title: 'Lobster',
                price: 120,
                quantity: 0,
                total: 0,
                selected: false,
                icon: 'free_breakfast',
              },
              {
                breadcrumb: ['Orders', 'Kitchen'],
                title: 'Braaibroodjies',
                price: 25,
                quantity: 0,
                total: 0,
                selected: false,
                icon: 'free_breakfast',
              },
            ],
          },
        ],
      },
      {
        waiter: {
          name: 'Jacob J.',
          selected: false,
        },
        tables: [
          {
            tableNumber: 7,
            selected: true,
            menuItems: [
              {
                breadcrumb: ['Orders', 'Kitchen'],
                title: 'Fish and Chips',
                price: 50,
                quantity: 0,
                total: 0,
                selected: false,
                icon: 'free_breakfast',
              },
              {
                breadcrumb: ['Orders', 'Kitchen'],
                title: 'Roast Chicken',
                price: 45,
                quantity: 0,
                total: 0,
                selected: false,
                icon: 'free_breakfast',
              },
              {
                breadcrumb: ['Orders', 'Kitchen'],
                title: 'Fillet Steak',
                price: 85,
                quantity: 0,
                total: 0,
                selected: false,
                icon: 'free_breakfast',
              },
              {
                breadcrumb: ['Orders', 'Kitchen'],
                title: 'Beefsteak',
                price: 81,
                quantity: 0,
                total: 0,
                selected: false,
                icon: 'free_breakfast',
              },
              {
                breadcrumb: ['Orders', 'Kitchen'],
                title: 'Roast Beef',
                price: 75,
                quantity: 0,
                total: 0,
                selected: false,
                icon: 'free_breakfast',
              },
              {
                breadcrumb: ['Orders', 'Kitchen'],
                title: 'Buffalo Wings',
                price: 78,
                quantity: 0,
                total: 0,
                selected: false,
                icon: 'free_breakfast',
              },
              {
                breadcrumb: ['Orders', 'Kitchen'],
                title: 'Lobster',
                price: 120,
                quantity: 0,
                total: 0,
                selected: false,
                icon: 'free_breakfast',
              },
              {
                breadcrumb: ['Orders', 'Kitchen'],
                title: 'Braaibroodjies',
                price: 25,
                quantity: 0,
                total: 0,
                selected: false,
                icon: 'free_breakfast',
              },
            ],
          },
          {
            tableNumber: 8,
            selected: false,
            menuItems: [
              {
                breadcrumb: ['Orders', 'Kitchen'],
                title: 'Fish and Chips',
                price: 50,
                quantity: 0,
                total: 0,
                selected: false,
                icon: 'free_breakfast',
              },
              {
                breadcrumb: ['Orders', 'Kitchen'],
                title: 'Roast Chicken',
                price: 45,
                quantity: 0,
                total: 0,
                selected: false,
                icon: 'free_breakfast',
              },
              {
                breadcrumb: ['Orders', 'Kitchen'],
                title: 'Fillet Steak',
                price: 85,
                quantity: 0,
                total: 0,
                selected: false,
                icon: 'free_breakfast',
              },
              {
                breadcrumb: ['Orders', 'Kitchen'],
                title: 'Beefsteak',
                price: 81,
                quantity: 0,
                total: 0,
                selected: false,
                icon: 'free_breakfast',
              },
              {
                breadcrumb: ['Orders', 'Kitchen'],
                title: 'Roast Beef',
                price: 75,
                quantity: 0,
                total: 0,
                selected: false,
                icon: 'free_breakfast',
              },
              {
                breadcrumb: ['Orders', 'Kitchen'],
                title: 'Buffalo Wings',
                price: 78,
                quantity: 0,
                total: 0,
                selected: false,
                icon: 'free_breakfast',
              },
              {
                breadcrumb: ['Orders', 'Kitchen'],
                title: 'Lobster',
                price: 120,
                quantity: 0,
                total: 0,
                selected: false,
                icon: 'free_breakfast',
              },
              {
                breadcrumb: ['Orders', 'Kitchen'],
                title: 'Braaibroodjies',
                price: 25,
                quantity: 0,
                total: 0,
                selected: false,
                icon: 'free_breakfast',
              },
            ],
          },
          {
            tableNumber: 9,
            selected: false,
            menuItems: [
              {
                breadcrumb: ['Orders', 'Kitchen'],
                title: 'Fish and Chips',
                price: 50,
                quantity: 0,
                total: 0,
                selected: false,
                icon: 'free_breakfast',
              },
              {
                breadcrumb: ['Orders', 'Kitchen'],
                title: 'Roast Chicken',
                price: 45,
                quantity: 0,
                total: 0,
                selected: false,
                icon: 'free_breakfast',
              },
              {
                breadcrumb: ['Orders', 'Kitchen'],
                title: 'Fillet Steak',
                price: 85,
                quantity: 0,
                total: 0,
                selected: false,
                icon: 'free_breakfast',
              },
              {
                breadcrumb: ['Orders', 'Kitchen'],
                title: 'Beefsteak',
                price: 81,
                quantity: 0,
                total: 0,
                selected: false,
                icon: 'free_breakfast',
              },
              {
                breadcrumb: ['Orders', 'Kitchen'],
                title: 'Roast Beef',
                price: 75,
                quantity: 0,
                total: 0,
                selected: false,
                icon: 'free_breakfast',
              },
              {
                breadcrumb: ['Orders', 'Kitchen'],
                title: 'Buffalo Wings',
                price: 78,
                quantity: 0,
                total: 0,
                selected: false,
                icon: 'free_breakfast',
              },
              {
                breadcrumb: ['Orders', 'Kitchen'],
                title: 'Lobster',
                price: 120,
                quantity: 0,
                total: 0,
                selected: false,
                icon: 'free_breakfast',
              },
              {
                breadcrumb: ['Orders', 'Kitchen'],
                title: 'Braaibroodjies',
                price: 25,
                quantity: 0,
                total: 0,
                selected: false,
                icon: 'free_breakfast',
              },
            ],
          },
        ],
      },
      {
        waiter: {
          name: 'Nel J.',
          selected: false,
        },
        tables: [
          {
            tableNumber: 10,
            selected: true,
            menuItems: [
              {
                breadcrumb: ['Orders', 'Kitchen'],
                title: 'Fish and Chips',
                price: 50,
                quantity: 0,
                total: 0,
                selected: false,
                icon: 'free_breakfast',
              },
              {
                breadcrumb: ['Orders', 'Kitchen'],
                title: 'Roast Chicken',
                price: 45,
                quantity: 0,
                total: 0,
                selected: false,
                icon: 'free_breakfast',
              },
              {
                breadcrumb: ['Orders', 'Kitchen'],
                title: 'Fillet Steak',
                price: 85,
                quantity: 0,
                total: 0,
                selected: false,
                icon: 'free_breakfast',
              },
              {
                breadcrumb: ['Orders', 'Kitchen'],
                title: 'Beefsteak',
                price: 81,
                quantity: 0,
                total: 0,
                selected: false,
                icon: 'free_breakfast',
              },
              {
                breadcrumb: ['Orders', 'Kitchen'],
                title: 'Roast Beef',
                price: 75,
                quantity: 0,
                total: 0,
                selected: false,
                icon: 'free_breakfast',
              },
              {
                breadcrumb: ['Orders', 'Kitchen'],
                title: 'Buffalo Wings',
                price: 78,
                quantity: 0,
                total: 0,
                selected: false,
                icon: 'free_breakfast',
              },
              {
                breadcrumb: ['Orders', 'Kitchen'],
                title: 'Lobster',
                price: 120,
                quantity: 0,
                total: 0,
                selected: false,
                icon: 'free_breakfast',
              },
              {
                breadcrumb: ['Orders', 'Kitchen'],
                title: 'Braaibroodjies',
                price: 25,
                quantity: 0,
                total: 0,
                selected: false,
                icon: 'free_breakfast',
              },
            ],
          },
          {
            tableNumber: 11,
            selected: false,
            menuItems: [
              {
                breadcrumb: ['Orders', 'Kitchen'],
                title: 'Fish and Chips',
                price: 50,
                quantity: 0,
                total: 0,
                selected: false,
                icon: 'free_breakfast',
              },
              {
                breadcrumb: ['Orders', 'Kitchen'],
                title: 'Roast Chicken',
                price: 45,
                quantity: 0,
                total: 0,
                selected: false,
                icon: 'free_breakfast',
              },
              {
                breadcrumb: ['Orders', 'Kitchen'],
                title: 'Fillet Steak',
                price: 85,
                quantity: 0,
                total: 0,
                selected: false,
                icon: 'free_breakfast',
              },
              {
                breadcrumb: ['Orders', 'Kitchen'],
                title: 'Beefsteak',
                price: 81,
                quantity: 0,
                total: 0,
                selected: false,
                icon: 'free_breakfast',
              },
              {
                breadcrumb: ['Orders', 'Kitchen'],
                title: 'Roast Beef',
                price: 75,
                quantity: 0,
                total: 0,
                selected: false,
                icon: 'free_breakfast',
              },
              {
                breadcrumb: ['Orders', 'Kitchen'],
                title: 'Buffalo Wings',
                price: 78,
                quantity: 0,
                total: 0,
                selected: false,
                icon: 'free_breakfast',
              },
              {
                breadcrumb: ['Orders', 'Kitchen'],
                title: 'Lobster',
                price: 120,
                quantity: 0,
                total: 0,
                selected: false,
                icon: 'free_breakfast',
              },
              {
                breadcrumb: ['Orders', 'Kitchen'],
                title: 'Braaibroodjies',
                price: 25,
                quantity: 0,
                total: 0,
                selected: false,
                icon: 'free_breakfast',
              },
            ],
          },
          {
            tableNumber: 12,
            selected: false,
            menuItems: [
              {
                breadcrumb: ['Orders', 'Kitchen'],
                title: 'Fish and Chips',
                price: 50,
                quantity: 0,
                total: 0,
                selected: false,
                icon: 'free_breakfast',
              },
              {
                breadcrumb: ['Orders', 'Kitchen'],
                title: 'Roast Chicken',
                price: 45,
                quantity: 0,
                total: 0,
                selected: false,
                icon: 'free_breakfast',
              },
              {
                breadcrumb: ['Orders', 'Kitchen'],
                title: 'Fillet Steak',
                price: 85,
                quantity: 0,
                total: 0,
                selected: false,
                icon: 'free_breakfast',
              },
              {
                breadcrumb: ['Orders', 'Kitchen'],
                title: 'Beefsteak',
                price: 81,
                quantity: 0,
                total: 0,
                selected: false,
                icon: 'free_breakfast',
              },
              {
                breadcrumb: ['Orders', 'Kitchen'],
                title: 'Roast Beef',
                price: 75,
                quantity: 0,
                total: 0,
                selected: false,
                icon: 'free_breakfast',
              },
              {
                breadcrumb: ['Orders', 'Kitchen'],
                title: 'Buffalo Wings',
                price: 78,
                quantity: 0,
                total: 0,
                selected: false,
                icon: 'free_breakfast',
              },
              {
                breadcrumb: ['Orders', 'Kitchen'],
                title: 'Lobster',
                price: 120,
                quantity: 0,
                total: 0,
                selected: false,
                icon: 'free_breakfast',
              },
              {
                breadcrumb: ['Orders', 'Kitchen'],
                title: 'Braaibroodjies',
                price: 25,
                quantity: 0,
                total: 0,
                selected: false,
                icon: 'free_breakfast',
              },
            ],
          },
        ],
      },
    ];

    this.waiters.set(
      this.waiterModels.map((model: POSModel) => {
        return {
          name: model.waiter.name,
          selected: model.waiter.selected,
          tables: model.tables.map((t) => t.tableNumber),
          selectedTable: model.tables.filter((t) => t.selected)[0].tableNumber,
        };
      })
    );
  }

  public initializeMenu(waiterName: string) {
    const selectedTableNumber = this.selectedWaiter()?.selectedTable;

    if (!selectedTableNumber) return;

    this.selectedWaiterIndex = this.waiterModels
      .map((i) => i.waiter.name)
      .indexOf(waiterName);

    this.selectedTableIndex = this.waiterModels[this.selectedWaiterIndex].tables
      .map((x) => x.tableNumber)
      .indexOf(selectedTableNumber);

    this.updateMenuItems();
  }

  public changeTable(tableNum: number) {
    this.selectedTableIndex = this.waiterModels[this.selectedWaiterIndex].tables
      .map((x) => x.tableNumber)
      .indexOf(tableNum);

    this.updateMenuItems();
  }

  public decreaseItemQuantity(item: MenuCategoryItem) {
    if (item.quantity > 0) item.quantity--;

    item.total = item.quantity > 0 ? item.quantity * item.price : 0;
    item.selected = item.quantity > 0 ? item.selected : false;

    this.updateMenuItems();
  }

  public increaseItemQuantity(item: MenuCategoryItem) {
    item.quantity = item.quantity + 1;
    item.total = item.quantity * item.price;

    this.updateMenuItems();
  }

  public deleteMenuItem(item: MenuCategoryItem) {
    item.quantity = 0;
    item.total = 0;
    item.selected = false;

    this.updateMenuItems();
  }

  private updateMenuItems() {
    this.categoryItems.update(() => {
      return [
        ...this.waiterModels[this.selectedWaiterIndex].tables[
          this.selectedTableIndex
        ].menuItems,
      ];
    });
  }
}
