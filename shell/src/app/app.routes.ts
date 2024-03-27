import { Route } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { loadRemoteModule } from '@softarc/native-federation-runtime';

export const routes: Route[] = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'mfe1',
    loadComponent: () =>
      loadRemoteModule('mfe1', './Component').then((m) => m.HomeComponent)
  },
  {
    path: 'mfe2',
    loadChildren: () =>
      loadRemoteModule('mfe2', './Routes').then((m) => m.ROUTES)
  },
  {
    path: 'mfe3',
    loadChildren: () =>
      loadRemoteModule('mfe3', './Routes').then((m) => m.ROUTES)
  },
  {
    // DO NOT insert routes after this one.
    path: '**',
    component: HomeComponent
  }
];
