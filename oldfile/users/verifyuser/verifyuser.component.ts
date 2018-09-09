import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServicesService } from '../../services/services.service';


import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';

@Component({
  selector: 'app-verifyuser',
  templateUrl: './verifyuser.component.html',
  styleUrls: ['./verifyuser.component.css']
})
export class VerifyuserComponent implements OnInit {
  newuserErr: string;
  newuserSuccess: string;

  newUserData:  any[];


  dataTable: any;

  constructor(private http: HttpClient, private chRef: ChangeDetectorRef,private jService:ServicesService) { }


//post registration data
pendingUser(){  
  
  this.jService.getlib("getpendingUsers").then((uResult)=>{
    if(uResult['status'] == "error"){ 

      this.newuserErr = uResult["message"];   

  setTimeout(() => {      
      this.newuserErr = "";
      }, 8000);
     
    }
    else{
    
      this.newUserData =uResult["usersDetails"];         
     // You'll have to wait that changeDetection occurs and projects data into 
        // the HTML template, you can ask Angular to that for you ;-)
        this.chRef.detectChanges();
        
                // Now you can use jQuery DataTables :
                const table: any = $('table');
                this.dataTable = table.DataTable();
        
    }
  });

}

  ngOnInit() {
    this.pendingUser();
    
  }

}

