import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  CsetupCollapsed = true;
  invSetCollapsed = true;
  trfCollapsed = true;
  inquireCollapsed = true;
  productCollapsed = true;
  iAccountCollapsed = true;
  terminalCollapsed = true;
  freezeCollapsed = true;
  userCollapsed = true;
  
  constructor() { }

  ngOnInit() {
  }

}
