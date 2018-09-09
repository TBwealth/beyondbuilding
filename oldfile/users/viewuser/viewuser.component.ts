import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';

@Component({
  selector: 'app-viewuser',
  templateUrl: './viewuser.component.html',
  styleUrls: ['./viewuser.component.css']
})
export class ViewuserComponent implements OnInit {
  clients: any[] = [
    { name: 'Austin', gender: 'Male', company: 'Swimlane' }
  ];
  dataTable: any;

  constructor(private http: HttpClient, private chRef: ChangeDetectorRef) { }

  ngOnInit() {
    

     // You'll have to wait that changeDetection occurs and projects data into 
        // the HTML template, you can ask Angular to that for you ;-)
        this.chRef.detectChanges();
        
                // Now you can use jQuery DataTables :
                const table: any = $('table');
                this.dataTable = table.DataTable();
                
  }

}

