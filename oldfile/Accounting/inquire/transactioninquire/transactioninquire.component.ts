import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-transactioninquire',
  templateUrl: './transactioninquire.component.html',
  styleUrls: ['./transactioninquire.component.css']
})
export class TransactioninquireComponent implements OnInit {
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
