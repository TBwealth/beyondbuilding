import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {DefaultComponent} from "./../theme/pages/default/default.component";
import {LayoutModule} from "./../theme/layouts/layout.module";
import {DashboardComponent} from "./dashboard.component";



const route: Routes = [

  {
    'path':'',
    'component':DefaultComponent,

    'children': [
      {
        'path': '',
        'component':DashboardComponent
      }
    ]
  }
];



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    LayoutModule
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
