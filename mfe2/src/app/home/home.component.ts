import { Component, OnInit } from '@angular/core';
import { CustomerUiComponent } from 'customer-ui';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CustomerUiComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {}
}
