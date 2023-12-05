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

  // Menu Items
  categoryItems: WritableSignal<MenuCategoryItem[]> = signal([]);
  totalSum: Signal<number> = computed(() =>
    this.categoryItems().reduce((sum, item) => sum + item.total, 0)
  );
  selectedItems: Signal<MenuCategoryItem[]> = computed(() =>
    this.categoryItems().filter((item: MenuCategoryItem) => {
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

  constructor() {
    this.categoryItems.set([
      {
        breadcrumb: ['Orders', 'Kitchen'],
        title: 'Fish and Chips',
        price: 50,
        quantity: 0,
        total: 0,
        selected: false,
      },
      {
        breadcrumb: ['Orders', 'Kitchen'],
        title: 'Roast Chicken',
        price: 45,
        quantity: 0,
        total: 0,
        selected: false,
      },
      {
        breadcrumb: ['Orders', 'Kitchen'],
        title: 'Fillet Steak',
        price: 85,
        quantity: 0,
        total: 0,
        selected: false,
      },
      {
        breadcrumb: ['Orders', 'Kitchen'],
        title: 'Beefsteak',
        price: 81,
        quantity: 0,
        total: 0,
        selected: false,
      },
      {
        breadcrumb: ['Orders', 'Kitchen'],
        title: 'Roast Beef',
        price: 75,
        quantity: 0,
        total: 0,
        selected: false,
      },
      {
        breadcrumb: ['Orders', 'Kitchen'],
        title: 'Buffalo Wings',
        price: 78,
        quantity: 0,
        total: 0,
        selected: false,
      },
      {
        breadcrumb: ['Orders', 'Kitchen'],
        title: 'Lobster',
        price: 120,
        quantity: 0,
        total: 0,
        selected: false,
      },
      {
        breadcrumb: ['Orders', 'Kitchen'],
        title: 'Braaibroodjies',
        price: 25,
        quantity: 0,
        total: 0,
        selected: false,
      },
    ]);
    this.waiters.set([
      {
        name: 'Leslie K.',
        selected: false,
        tables: [1, 2, 3],
        selectedTable: 1,
      },
      {
        name: 'Cameron W.',
        selected: false,
        tables: [4, 5, 6],
        selectedTable: 4,
      },
      { name: 'Jacob J', selected: false, tables: [7, 8, 9], selectedTable: 7 },
      {
        name: 'Nel J.',
        selected: false,
        tables: [10, 11, 12],
        selectedTable: 10,
      },
    ]);
  }
}
