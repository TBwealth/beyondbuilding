import { Component, OnInit, ElementRef, ViewChild, Input, TemplateRef } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {FormBuilder, Validators} from "@angular/forms";
import { FormsModule }   from '@angular/forms';
import { FormArray} from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { Bcustomers } from '../../../_models/customers.model';

import { TabsetComponent } from 'ngx-bootstrap';
import { UploadEvent, UploadFile, FileSystemFileEntry, FileSystemDirectoryEntry} from 'ngx-file-drop';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';


@Component({
  selector: 'app-newcustomer',
  templateUrl: './newcustomer.component.html',
  styleUrls: ['./newcustomer.component.css']
})
export class NewcustomerComponent implements OnInit {
  @Input() multiple: boolean = false;
  @ViewChild('fileInput') inputEl: ElementRef;
  @ViewChild('staticTabs') staticTabs: TabsetComponent;
  

  regform: FormGroup;
  form: FormGroup;
  listfiles: Array<any> = [];
  filesObjects: Array<any> = [];
  filesKeys: Array<string> = [];
  fileCount: number = 0;
  fileInfo: string;
  imgUplErr: string;
  imgUplsucess: string; 
  imgupldavatar: string;
  newRegErr: string;
  newregSuccess: string;
  mdok: string = "";

  minDate = new Date(2017, 5, 10);
  maxDate = new Date(2018, 9, 15);

  myForm = new FormGroup({
    myDateYMD: new FormControl(new Date()),
    myDateFull: new FormControl(new Date()),
    myDateMDY: new FormControl(new Date())
  });

  regData:Bcustomers={}

  modalRef: BsModalRef;
  
  config = {
    ignoreBackdropClick: true,
    class: 'modal-sm'
  }
  constructor(private http: HttpClient, private modalService: BsModalService) { }

  selectTab(tab_id: number) {
    this.staticTabs.tabs[tab_id].active = true; 
       
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, this.config);
  }

  decline(): void {   
    this.modalRef.hide();
  }
  

  ngOnInit() {
  }

}
