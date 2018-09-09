import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-modifytransaction',
  templateUrl: './modifytransaction.component.html',
  styleUrls: ['./modifytransaction.component.css']
})
export class ModifytransactionComponent implements OnInit {
  newTransform: FormGroup;
  newTrfErr: string;

  newTranData : {
    acctdebitnumb?: string,
    acctdebitname?: string,
    acctdebittype?: string,
    acctdebitbal?:  string,
    acctdebitamount?:string,
    acctdebitdate?:string,
    acctdebitnaration?: string,
    acctcreditnumb?: string,
    acctcreditname?: string,
    acctcredittype?: string,
    acctcreditbal?:  string,
    acctcreditamount?:string,
    acctcreditdate?:string,
    acctcreditnaration?: string
  }={};
  constructor(private http: HttpClient) { }

  ngOnInit() {
    var date = new Date();
    
    this.newTranData.acctdebitdate = date.toLocaleDateString();
    this.newTranData.acctcreditdate = date.toLocaleDateString();
  }

}
