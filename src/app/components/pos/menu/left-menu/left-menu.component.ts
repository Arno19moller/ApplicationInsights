import { Component, inject } from '@angular/core';
import { Waiter } from 'src/app/components/models/waiter.model';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrl: './left-menu.component.scss',
})
export class LeftMenuComponent {
  public sharedService = inject(SharedService);

  public menuItemsLeft = [
    { text: 'Menu item', link: '', selected: true },
    { text: 'Menu item', link: '', selected: false },
    { text: 'Menu item', link: '', selected: false },
    { text: 'Menu item', link: '', selected: false },
  ];

  menuItemSelected(menuItem: any, menuItems: any[]) {
    menuItems.map((item) => {
      item.selected = false;
    });
    menuItem.selected = true;
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
    this.sharedService.initializeMenu(waiter.name);
  }
}
