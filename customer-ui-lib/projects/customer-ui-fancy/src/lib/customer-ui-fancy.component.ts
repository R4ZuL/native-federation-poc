import {Component, Input} from '@angular/core';

@Component({
  selector: 'lib-customer-ui',
  standalone: true,
  imports: [],
  templateUrl: './customer-ui-fancy.component.html',
  styleUrl: './customer-ui-fancy.component.css'
})
export class CustomerUiComponent {
  @Input() firstname = 'Hans';
  @Input() surname = 'Wurst';
  @Input() email = 'Hans.Wurst@email.com';
  @Input() age = '55';
}
