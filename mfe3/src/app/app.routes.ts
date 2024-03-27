import { Route } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const ROUTES: Route[] = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    // DO NOT insert routes after this one.
    path: '**',
    component: HomeComponent
  }
];
