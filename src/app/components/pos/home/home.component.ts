import { Component, inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SharedService } from 'src/app/services/shared.service';
import { MenuCategoryItem } from '../../models/menuCategoryItem.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  cards = [
    { name: 'Breakfast', icon: 'free_breakfast' },
    { name: 'Soups', icon: 'free_breakfast' },
    { name: 'Pasta', icon: 'free_breakfast' },
    { name: 'Sushi', icon: 'free_breakfast' },
    { name: 'Main course', icon: 'free_breakfast' },
    { name: 'Desserts', icon: 'free_breakfast' },
    { name: 'Drinks', icon: 'free_breakfast' },
    { name: 'Alcohol', icon: 'free_breakfast' },
  ];

  isHandset = false;
  showCategoryItems = false;

  public sharedService = inject(SharedService);
  isHandset$: Observable<boolean> = this.sharedService.isHandset$;

  constructor() {}

  ngOnInit(): void {
    this.isHandset$.subscribe((isHandset: boolean) => {
      this.isHandset = isHandset;
    });
  }

  categoryClicked(card: { name: string; icon: string }) {
    if (this.isHandset) {
      this.showCategoryItems = true;
    }
  }

  increaseItemQuantity(item: MenuCategoryItem) {
    item.quantity++;
    this.sharedService.categoryItems.update((items: MenuCategoryItem[]) => {
      const index = items.map((i) => i.title).indexOf(item.title);

      if (index === -1) {
        items.push({
          title: item.title,
          price: item.price,
          quantity: item.quantity,
          total: 0,
          selected: false,
          breadcrumb: ['Orders', 'Kitchen'],
        });
      } else {
        items[index].quantity = item.quantity;
        items[index].total = item.quantity * item.price;
      }
      return [...items];
    });
  }

  decreaseItemQuantity(item: MenuCategoryItem) {
    if (item.quantity > 0) item.quantity--;
    this.sharedService.categoryItems.update((items: MenuCategoryItem[]) => {
      const index = items.map((i) => i.title).indexOf(item.title);

      if (index === -1) {
        return items;
      } else {
        items[index].quantity = item.quantity;
        items[index].total = item.quantity > 0 ? item.quantity * item.price : 0;
        items[index].selected = item.quantity > 0 ? item.selected : false;
      }
      return [...items];
    });
  }
}
