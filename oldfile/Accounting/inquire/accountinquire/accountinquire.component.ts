
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-accountinquire',
  templateUrl: './accountinquire.component.html',
  styleUrls: ['./accountinquire.component.css']
})
export class AccountinquireComponent implements OnInit {
  newTranData:{acctdebitnumb?:string}={};
  clients: any[] = [
    { name: 'Austin', gender: 'Male', company: 'Swimlane' },
    { name: 'Dany', gender: 'Male', company: 'KFC' },
   
  ];
  dataTable: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    

  }

}