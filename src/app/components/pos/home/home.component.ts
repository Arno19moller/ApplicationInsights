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
  cardColors: string[] = [
    '#E3F2FD',
    '#FFF9E1',
    '#ffebf5',
    '#E8F5E9',
    '#ffe0e0',
    '#E0F7FA',
    '#FFFDE7',
    '#F3E5F5',
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
    this.sharedService.increaseItemQuantity(item);
  }

  decreaseItemQuantity(item: MenuCategoryItem) {
    this.sharedService.decreaseItemQuantity(item);
  }
}
