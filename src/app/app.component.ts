import { Component, OnInit } from '@angular/core';
import { BarcodeFormat } from '@zxing/library';

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

  constructor() {}

  ngOnInit(): void {}

  scanSuccessHandler(event: string) {
    console.log(event);
  }

  scanError(event: any) {
    console.log(event);
  }
}
