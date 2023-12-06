import { Component, OnInit, inject } from '@angular/core';
import { BarcodeFormat } from '@zxing/library';
import { SharedService } from './services/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ApplicationInsights';
  allowedFormats = [
    BarcodeFormat.CODE_128,
    BarcodeFormat.EAN_8,
    BarcodeFormat.EAN_13,
    BarcodeFormat.CODE_39,
    BarcodeFormat.CODE_93,
    BarcodeFormat.CODE_128,
    BarcodeFormat.QR_CODE,
  ];
  public sharedService = inject(SharedService);

  constructor() {}

  ngOnInit(): void {
    this.sharedService.createWaiterModels();
    this.sharedService.initializeMenu('Leslie K.');
  }

  scanSuccessHandler(event: string) {
    console.log(event);
  }

  scanError(event: any) {
    console.log(event);
  }
}
