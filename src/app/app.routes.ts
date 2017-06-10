import { Routes } from '@angular/router';

import { TestComponent } from './test/test.component'

export const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: TestComponent }
];

