import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { ServicesService } from '../../services/services.service';
import { HttpClient } from '@angular/common/http';
import { imgResp } from '../../models/imgResp';

@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.css']
})
export class NewuserComponent implements OnInit {
  newuserform: FormGroup;
  form: FormGroup;
  newuserErr: string;
  newuserSuccess: string;
  workingld: boolean = false;

  newUserData:  {  
    staffName?: string,    
    staffId?: string,
    staffemail?:string,
    username?: number,
    userrole?: string,
    }={};
  constructor(private http: HttpClient, private jService:ServicesService) { }

//post registration data
postUser(formdata){  
  this.workingld = true;
  this.jService.add_rec("newUsercreation",{postData:formdata}).then((uResult)=>{
    if(uResult['status'] == "error"){ 

      this.newuserErr = uResult["message"];   

  setTimeout(() => {      
      this.newuserErr = "";
      }, 8000);
      this.workingld = false;
    }
    else{
      this.newUserData = {};
      this.newuserSuccess = uResult["message"];         
      
      setTimeout(() => {      
        this.newuserSuccess = "";
          
        }, 8000);
        this.workingld = false;
    }
  });

}

 

  ngOnInit() {
    
   
  
  }

}