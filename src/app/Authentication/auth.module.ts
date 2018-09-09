import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {BaseRequestOptions, HttpModule} from '@angular/http';
import {MockBackend} from '@angular/http/testing';

import {AuthRoutingModule} from './auth-routing.routing';
import {AuthComponent} from './auth.component';

import {HttpClient, HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AuthComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    AuthRoutingModule,
  ],
  providers: [
   
    HttpClient

  ]
})

export class AuthModule {
}