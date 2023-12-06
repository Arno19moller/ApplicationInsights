import { Component, inject } from '@angular/core';
import { MenuCategoryItem } from 'src/app/components/models/menuCategoryItem.model';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-right-menu',
  templateUrl: './right-menu.component.html',
  styleUrl: './right-menu.component.scss',
})
export class RightMenuComponent {
  public sharedService = inject(SharedService);

  tableChanged(tableNum: number) {
    const selectedWaiter = this.sharedService.selectedWaiter();
    let waiterIndex = 0;
    if (selectedWaiter) {
      let waiters = this.sharedService.waiters();
      waiterIndex = waiters.map((i) => i.name).indexOf(selectedWaiter.name);
      waiters[waiterIndex].selectedTable = tableNum;
      this.sharedService.waiters.set([...waiters]);
    }
    this.sharedService.changeTable(tableNum);
  }

  delete(item: MenuCategoryItem): void {
    this.sharedService.deleteMenuItem(item);
  }
}
