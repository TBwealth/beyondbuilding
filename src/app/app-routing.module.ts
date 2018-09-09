import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: 'login', loadChildren: './Aunthentication/auth.module#AuthModule'},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
];

@NgModule({
  
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }