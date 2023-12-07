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
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private breakpointObserver = inject(BreakpointObserver);
  private dataService = inject(DataService);

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe([Breakpoints.Small, Breakpoints.XSmall])
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  private selectedWaiterIndex = 0;
  private selectedTableIndex = 0;
  private cardColors: string[] = [
    '#E3F2FD',
    '#FFF9E1',
    '#ffebf5',
    '#E8F5E9',
    '#ffe0e0',
    '#E0F7FA',
    '#FFFDE7',
    '#F3E5F5',
  ];

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

  // POSModel
  posModel: POSModel[] = [];

  constructor() {}

  public createWaiterModels() {
    this.dataService
      .loadData()
      .pipe(
        map((models: POSModel[]) => {
          models = models.map((model) => {
            model.tables = model.tables.map((table) => {
              table.menuItems = table.menuItems.map((menuItem, index) => {
                menuItem.color = this.cardColors[index % 8];
                return menuItem;
              });
              return table;
            });
            return model;
          });
          return models;
        })
      )
      .subscribe((model) => {
        this.posModel = model;
      });

    this.waiters.set(
      this.posModel.map((model: POSModel) => {
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

    this.selectedWaiterIndex = this.posModel
      .map((i) => i.waiter.name)
      .indexOf(waiterName);

    this.selectedTableIndex = this.posModel[this.selectedWaiterIndex].tables
      .map((x) => x.tableNumber)
      .indexOf(selectedTableNumber);

    this.updateMenuItems();
  }

  public changeTable(tableNum: number) {
    this.selectedTableIndex = this.posModel[this.selectedWaiterIndex].tables
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
        ...this.posModel[this.selectedWaiterIndex].tables[
          this.selectedTableIndex
        ].menuItems,
      ];
    });
  }
}
