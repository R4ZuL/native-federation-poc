import {Component, Input} from '@angular/core';

@Component({
  selector: 'lib-customer-ui',
  standalone: true,
  imports: [],
  templateUrl: './customer-ui-basic.component.html',
  styleUrl: './customer-ui-basic.component.css'
})
export class CustomerUiComponent {
  @Input() firstname = 'Hans';
  @Input() surname = 'Wurst';
  @Input() email = 'Hans.Wurst@email.com';
}
