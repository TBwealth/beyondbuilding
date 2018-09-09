import { Component, OnInit, TemplateRef} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {FormBuilder, Validators} from "@angular/forms";
import { FormsModule }   from '@angular/forms';
import { FormArray} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router, CanActivate } from '@angular/router';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  token = [];
  form: FormGroup;
  newloginErr:string;
  newloginSuccess: string;
  loginform: FormGroup;
  modalRef: BsModalRef;
  qrCodeUrl; string;

  config = {
    ignoreBackdropClick: true,
    class: 'modal-lg'
  }

  loginData:  {
    cususername?: string,
    custpassword?: string,    
    cust2fa?: string,
    }={};
  constructor(private http: HttpClient, private modalService: BsModalService, public router: Router) { }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, this.config);
  }

  decline(): void {   
    this.modalRef.hide();
  }
  //post registration data
Clientlogin(formdata, scndlevelAuth){  
 
  //this.jService.add_rec("userlogin",{postData:formdata}).then((uResult)=>{
    //if(uResult['status'] == "error"){
     //this.newloginErr = uResult['message'];  
    
     //setTimeout(() => {      
      //this.newloginErr = "";
      //}, 8000);
    //}
    //else{
      
      //this.newloginSuccess = uResult["message"];
      //this.qrCodeUrl = uResult["qrCodeUrl"];         
     //this.openModal(scndlevelAuth);

     
     
    //}
  //});

}

secndlevelAuth(formdata){
 // this.jService.add_rec("usercheck2fa",{postData:formdata}).then((uResult)=>{
   // if(uResult['status'] == "error"){
     //this.newloginErr = uResult['message'];  
    
    // setTimeout(() => {      
      //this.newloginErr = "";
     // }, 8000);
    //}
    //else{
      //this.loginData = {};
      //this.newloginSuccess = uResult["newregmessage"];  
      //const token =  uResult["token"].token;
      //localStorage.setItem('token', token);
      //this.decline();
      //this.router.navigate(['dashboard']);

      //setTimeout(() => {      
        //this.newloginSuccess = "";
          
        //}, 5000);
     
    //}
  //});
}

  ngOnInit() {
    
  }

}
