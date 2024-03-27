import {Component, Input} from '@angular/core';

@Component({
  selector: 'lib-customer-ui',
  standalone: true,
  imports: [],
  templateUrl: './customer-ui-fancy.component.html',
  styleUrl: './customer-ui-fancy.component.css'
})
export class CustomerUiComponent {
  @Input() customer: CustomerData | undefined;
}

export class CustomerData {
  id: number | undefined;
  firstname: string | undefined;
  surname: string | undefined;
  age: number | undefined;
}
