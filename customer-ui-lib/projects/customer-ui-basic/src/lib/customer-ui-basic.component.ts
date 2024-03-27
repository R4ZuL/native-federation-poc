import {Component, Input} from '@angular/core';

@Component({
  selector: 'lib-customer-ui',
  standalone: true,
  imports: [],
  templateUrl: './customer-ui-basic.component.html',
  styleUrl: './customer-ui-basic.component.css'
})
export class CustomerUiComponent {
  @Input() customer: CustomerData | undefined;
}

export class CustomerData {
  id: number | undefined;
  firstname: string | undefined;
  surname: string | undefined;
}