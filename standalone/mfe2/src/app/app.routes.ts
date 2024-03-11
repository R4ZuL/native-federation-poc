import { Route } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const ROUTES: Route[] = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    // DO NOT insert routes after this one.
    path: '**',
    component: NotFoundComponent
  }
];
