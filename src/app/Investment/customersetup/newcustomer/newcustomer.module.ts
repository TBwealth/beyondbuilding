import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import {RouterModule, Routes} from "@angular/router";
import {DefaultComponent} from "../../../theme/pages/default/default.component";
import {LayoutModule} from "../../../theme/layouts/layout.module";
import {NewcustomerComponent} from "./newcustomer.component";


import { TabsModule } from 'ngx-bootstrap';
import { CollapseModule } from 'ngx-bootstrap';
import { ModalModule } from 'ngx-bootstrap';
import { FileDropModule } from 'ngx-file-drop';

const route: Routes = [

  {
    'path':'',
    'component':DefaultComponent,

    'children': [
      {
        'path': '',
        'component':NewcustomerComponent
      }
    ]
  }
];



@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild(route),
    LayoutModule,
    TabsModule.forRoot(),
    CollapseModule.forRoot(),
    ModalModule.forRoot(),
    FileDropModule
  ],
  declarations: [NewcustomerComponent]
})
export class NewcustomerModule { }
