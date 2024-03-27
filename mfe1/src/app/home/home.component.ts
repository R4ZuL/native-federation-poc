import { Component, OnDestroy, OnInit } from '@angular/core';
import { CustomerUiComponent, CustomerData } from 'customer-ui';
import { Subscription } from 'rxjs';
import { DataSharerService } from "data-sharer";
import { version } from '../../../package.json';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CustomerUiComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy {
  customerData!: CustomerData;
  subscription!: Subscription;
  version = version;
  public get customer() : CustomerData {
    return this.customerData;
  }
  constructor(private dataSharer: DataSharerService) {
    this.customerData = new CustomerData();
  };
  ngOnInit(): void {
    this.subscription = this.dataSharer.currentMessage.subscribe(message => {
      if (message != undefined) {
        this.customerData = message
      }
    })
  }
  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }
};
