import { Component, EventEmitter, OnInit, Output, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Waiter } from 'src/app/components/models/waiter.model';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-menu-content',
  templateUrl: './menu-content.component.html',
  styleUrl: './menu-content.component.scss',
})
export class MenuContentComponent implements OnInit {
  public sharedService = inject(SharedService);

  isHandset$: Observable<boolean> = this.sharedService.isHandset$;

  @Output() toggleLeftMenu = new EventEmitter();
  @Output() toggleRightMenu = new EventEmitter();

  public people: Waiter[] = [];
  public value: string = '';

  ngOnInit(): void {
    this.people = this.sharedService.waiters();
  }
}
