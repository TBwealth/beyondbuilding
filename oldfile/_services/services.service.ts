import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { imgResp } from '../models/imgResp';
import { Observable, Subject } from 'rxjs';
import { RequestOptions, Headers,  } from '@angular/http';
import { HttpHeaders,  } from '@angular/common/http';
import { Router } from '@angular/router';
import decode from 'jwt-decode';


@Injectable()
export class ServicesService {

  servicebase: string = "http://localhost/beyondbuilding/clients/api/v1/";
  constructor(private http: HttpClient, public router: Router) {}

  private extractData(res: HttpResponse<any>){
    let body = res;
    return body;
  }
  private extractRegData(res: HttpResponse<any>){
    let body = res;   
    return body;
  }
  private handleErrorPromise (error: HttpResponse<any> | any){
    console.error(error.message || error);
    return Promise.reject(error.message || error);
  }
  
  getlib(q): Promise<any> {      
         return this.http.get(this.servicebase + q).toPromise()
        .then(this.extractData)
        .catch(this.handleErrorPromise);   
      };

      add_rec(q,object): Promise<any> {      
        return this.http.post(this.servicebase + q, object).toPromise()
       .then(this.extractRegData)
       .catch(this.handleErrorPromise);   
     }

uplfile(q,object): Promise<any> { 

  const httpOptions = {
    headers: new HttpHeaders({
      'Accept':  'application/json',
    })
  };
           return this.http.post(this.servicebase + q, object, httpOptions).toPromise()
          .then(this.extractRegData)
          .catch(this.handleErrorPromise);   
        }

        logout(): Promise<any> {
          const token = localStorage.getItem('token');
          const tokenPayload = decode(token);
         var data = {'token' : token, 'username' : tokenPayload.username} 

         return this.http.post(this.servicebase +"logout",{postData:data}).toPromise().then((uResult)=>{
            if(uResult['status'] == "error"){
              localStorage.removeItem('token');
             alert(uResult["message"]);
             this.router.navigate(['login']);
            }
            else{
              localStorage.removeItem('token');
                      
             
              this.router.navigate(['login']);
              alert(uResult["message"]);
            }
          }).catch(this.handleErrorPromise);  
        }


        private extractdashboardData(res: HttpResponse<any>){
          let body = res;   
          return body;
        }
        //Get dashboard data
getdashboarddata(): Promise<any>{ 
  const token = localStorage.getItem('token'); 
  if(!token){
    
    this.router.navigate(['']);
  }else{
  return  this.http.post(this.servicebase +"client/dashboard",{postData:token}).toPromise()
    .then(this.extractdashboardData)
    .catch(this.handleErrorPromise);

  } 

}



}
