import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  public sharedService = inject(SharedService);

  isHandset$: Observable<boolean> = this.sharedService.isHandset$;

  constructor() {}
}
