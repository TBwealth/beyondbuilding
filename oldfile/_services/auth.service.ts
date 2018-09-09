import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import {JwtHelperService} from '@auth0/angular-jwt';


@Injectable()
export class AuthService {

 constructor(public jwtHelper: JwtHelperService){}
public isAuthenticated(): boolean{

    if (localStorage.getItem('token')) {
        // logged in so return true
        const token = localStorage.getItem('token');
        return this.jwtHelper.isTokenExpired(token);
    }else{
        
        return false;
    }
    
}



}
