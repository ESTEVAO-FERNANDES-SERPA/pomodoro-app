import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo:'timer'
  },
  {
    path: 'timer',
    loadComponent: () => import('./pages/timer/timer.component').then(m => m.TimerComponent),
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/timer/timer.component').then(m => m.TimerComponent),
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./pages/timer/timer.component').then(m => m.TimerComponent),
  },
  {
    path: 'settings',
    loadComponent: () => import('./pages/timer/timer.component').then(m => m.TimerComponent),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
