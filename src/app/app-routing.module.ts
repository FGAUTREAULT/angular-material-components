import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ROUTING_HOME, ROUTING_COMPONENT } from './core/constants/routing.constants';

export const routes: Routes = [
  {
    path: ROUTING_HOME,
    component: HomeComponent
  },
  {
    path: ROUTING_COMPONENT,
    loadChildren: './components/components.module#ComponentsModule'
  },
  {
    path: '**',
    redirectTo: ROUTING_HOME,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      onSameUrlNavigation: 'reload',
      // To debug routing
      // enableTracing: true
    })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
