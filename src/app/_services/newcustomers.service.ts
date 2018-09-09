import {Injectable} from '@angular/core';
import { Bcustomers } from '../_models/customers.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {customConfig} from "../custumConfig";
import { HttpResponse } from '@angular/common/http';

@Injectable()
export class NewcustomersService {
  responseMsg: any;
  servicebase: string = customConfig.apiEndpoint;
  constructor(private http: HttpClient){}

  getAllAppraisalcycles(): Observable<HttpResponse<Bcustomers[]>> {
    return this.http.get<Bcustomers[]>(this.servicebase + '/api/appraisalcycle/getcycle/all',{observe: 'response'});
}

getAppraisalcycleById(id: number): Observable<Bcustomers> {
    var endpointUrl = this.servicebase + '/api/appraisalcycle/getcyclebyid/' + id;
    var _result = this.http.get<Bcustomers>(endpointUrl)
    return _result;
}

getAppraisalcycleByName(name: string): Observable<Bcustomers> {
    var endpointUrl = '/api/appraisalcycle/getcyclebyname/' + name;
    var _result = this.http.get<Bcustomers>(endpointUrl)
    return _result;
}

deleteAppraisalcycle(id: number): Observable<Bcustomers> {
    var endpointUrl = this.servicebase + '/api/appraisalcycle/deletecycle/' + id;
    var _result = this.http.get<Bcustomers>(endpointUrl)
    return _result;
}


createAppraisalcycle(formValues:Bcustomers) {
    let options = {headers: new HttpHeaders({'Content-Type': 'application/json'})}
    
    return this.http.post<Bcustomers>(this.servicebase + '/api/appraisalcycle/createcycle', formValues,options)
    .pipe(catchError(this.handleError<Bcustomers>('createcycle')))
}

updateAppraisalcycle(formValues:Bcustomers) {
    let options: {headers:{'Content-Type': 'application/json'}}
    
    return this.http.post<any>(this.servicebase + '/api/appraisalcycle/updatecycle', formValues,options)
    .pipe(catchError(this.handleError<any>('updatecycle')))
}

private handleError<T> (operation = 'operation', result?:T)
{
    return (error: any): Observable<T> => {
       
        return (error);
    }
}

}
