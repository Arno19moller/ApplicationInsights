import { Component, inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SharedService } from 'src/app/services/shared.service';
import { MenuCategoryItem } from '../../models/menuCategoryItem.model';
import { Waiter } from '../../models/waiter.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  public menuItemsLeft = [
    { text: 'Menu item', link: '', selected: true },
    { text: 'Menu item', link: '', selected: false },
    { text: 'Menu item', link: '', selected: false },
    { text: 'Menu item', link: '', selected: false },
  ];
  public menuItemsRight = [
    { text: 'Menu item', link: '', selected: false },
    { text: 'Menu item', link: '', selected: false },
    { text: 'Menu item', link: '', selected: false },
    { text: 'Menu item', link: '', selected: false },
    { text: 'Menu item', link: '', selected: false },
    { text: 'Menu item', link: '', selected: false },
  ];
  public people: Waiter[] = [];
  public showDelete = false;
  public value: string = '';
  selectedItems: MenuCategoryItem[] = [];

  public sharedService = inject(SharedService);
  isHandset$: Observable<boolean> = this.sharedService.isHandset$;

  constructor() {}

  ngOnInit(): void {
    this.people = this.sharedService.waiters();
  }

  menuItemSelected(menuItem: any, menuItems: any[]) {
    menuItems.map((item) => {
      item.selected = false;
    });
    menuItem.selected = true;
    this.selectedItems = [...this.sharedService.selectedItems()];
  }

  delete(item: MenuCategoryItem): void {
    this.sharedService.categoryItems.update((items: MenuCategoryItem[]) => {
      const index = items.map((i) => i.title).indexOf(item.title);

      if (index === -1) {
        return items;
      } else {
        items[index].quantity = 0;
        items[index].total = 0;
        items[index].selected = false;
      }
      return [...items];
    });
  }

  chipClicked(waiter: Waiter) {
    let waiters = this.sharedService.waiters();
    const index = waiters.map((i) => i.name).indexOf(waiter.name);
    waiters = waiters.map((waiter: Waiter, i: number) => {
      if (i === index) {
        waiter.selected = true;
      } else {
        waiter.selected = false;
      }
      return waiter;
    });

    this.sharedService.waiters.set([...waiters]);
  }

  tableChanged(tableNum: number) {
    const selectedWaiter = this.sharedService.selectedWaiter();
    if (selectedWaiter) {
      let waiters = this.sharedService.waiters();
      const index = waiters.map((i) => i.name).indexOf(selectedWaiter.name);
      waiters[index].selectedTable = tableNum;
      this.sharedService.waiters.set([...waiters]);
    }
  }
}
