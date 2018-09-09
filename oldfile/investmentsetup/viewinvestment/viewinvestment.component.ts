import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-viewinvestment',
  templateUrl: './viewinvestment.component.html',
  styleUrls: ['./viewinvestment.component.css']
})
export class ViewinvestmentComponent implements OnInit {

  newInvData:  {  
    invAcct?: string,    
    custname?: string,
    invProduct?:string,
    invRate?: number,
    invTenor?: string,
    invAmount?: number,
    invDate?: string,
    maturityDate?: string,
    roi?: number
    }={};
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

}
