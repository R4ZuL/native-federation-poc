import { Component } from '@angular/core';
import { version } from '../../../package.json';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  version = version;
  constructor() { };
};

