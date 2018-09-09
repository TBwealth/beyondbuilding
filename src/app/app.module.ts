import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AuthModule } from "./Authentication/auth.module";

import { BsDatepickerModule } from 'ngx-bootstrap';
import { FileDropModule } from 'ngx-file-drop';

import { NgxPermissionsModule } from 'ngx-permissions';

import { ModalModule } from 'ngx-bootstrap';
import {JwtHelperService,JWT_OPTIONS} from '@auth0/angular-jwt';
import { JwtModule } from '@auth0/angular-jwt';


import { LayoutModule } from './theme/layouts/layout.module';

import { NewcustomersService } from './_services/newcustomers.service';


export function tokenGetter() {
  return localStorage.getItem('token');
}


import { AppRoutingModule } from './app-routing.module';
import { ThemeRoutingModule } from "./theme/theme-routing.module";
import { ThemeComponent } from './theme/theme.component';
import { AppComponent } from './app.component'
import { LoginComponent } from './Authentication/login/login.component';





@NgModule({
  declarations: [
    AppComponent,
    ThemeComponent,
    LoginComponent,  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    LayoutModule,
    AuthModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    ThemeRoutingModule,
    FileDropModule,
    BsDatepickerModule.forRoot(),
 
    NgxPermissionsModule.forRoot(),
    ModalModule.forRoot(),
    JwtModule.forRoot({config: {
      tokenGetter: tokenGetter
    }}),
    

  ],
  providers: [
    ,JwtHelperService,NewcustomersService
    ],
    
  bootstrap: [AppComponent]
})
export class AppModule { }
