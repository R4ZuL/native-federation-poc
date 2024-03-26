import { Component, OnInit } from '@angular/core';
import { CustomerUiComponent } from 'customer-ui';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CustomerUiComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {}
}
