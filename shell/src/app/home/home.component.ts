import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Subscription } from 'rxjs';
import { CustomerUiComponent, CustomerData } from 'customer-ui';
import { DataSharerService } from "data-sharer";
import { version } from '../../../package.json';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule, MatInputModule, FormsModule, CustomerUiComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy {
  customers: CustomerData[] = [
    {id: 1, firstname: 'Humor', surname: 'Simpson', age: 45},
    {id: 2, firstname: 'Peter', surname: 'Griffin', age: 52},
    {id: 3, firstname: 'Rick', surname: 'Smith', age: 70}
  ];
  customerId!: number;
  customerData!: CustomerData;
  subscription!: Subscription;
  version = version;
  public get id() : number {
    return this.customerId;
  }
  public get customer() : CustomerData {
    return this.customerData;
  }
  constructor(private dataSharer: DataSharerService) {
    this.customerData = new CustomerData();
  }
  ngOnInit(): void {
    this.subscription = this.dataSharer.currentMessage.subscribe(message => {
      if (message != undefined) {
        this.customerId = message.id
        this.customerData = message
      }
    })
  }
  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }
  onCustomerChange(customerId: number) {
    if (customerId != undefined && customerId > 0) {
      let customer = this.customers.find(customer => customer.id === customerId);
      if (customer != undefined) {
        this.dataSharer.publishMessage(customer);
      }
    }
  }
}
