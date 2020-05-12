import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
// import { FibonacciComponent } from './fibonacci/fibonacci.component';

const routes: Routes = [{
  path: 'fibonacci', loadChildren: () => import('./fibonacci/fibonacci.module').then(m => m.FibonacciModule)
  // path: 'fibonacci', component: FibonacciComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
