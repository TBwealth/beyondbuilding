import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { ServicesService } from '../../services/services.service';
import { HttpClient } from '@angular/common/http';
import { imgResp } from '../../models/imgResp';

@Component({
  selector: 'app-modifyinternalaccount',
  templateUrl: './modifyinternalaccount.component.html',
  styleUrls: ['./modifyinternalaccount.component.css']
})
export class ModifyinternalaccountComponent implements OnInit {

  ninvform: FormGroup;
  form: FormGroup;
  newInvErr: string;
 

  newInvData:  {  
    custid?: string,    
    custname?: string,
    invProduct?:string,
    invRate?: number,
    invTenor?: string,
    invAmount?: number,
    invDate?: string,
    maturityDate?: string,
    roi?: number
    }={};
  constructor(private http: HttpClient, private jService:ServicesService) { }

  invchange(){
    var invdate = this.newInvData.invDate;
    var invtenor = this.newInvData.invTenor;
    if(invdate == "" || invtenor == "")
    {
      alert("Please Fill Investment date & Investment Tenor")
    }else{
      var date = new Date(invdate);
      date.setDate( date.getDate() + parseInt(invtenor));
      this.newInvData.maturityDate = date.toLocaleDateString();
    }
   
  }

  invAmntchng(){
    if(this.newInvData.invRate){
      this.newInvData.roi = this.newInvData.invAmount * this.newInvData.invRate;
    }else{
      alert("please supply rate");
    }
    
  }

  ngOnInit() {
    
   
  
  }

}

