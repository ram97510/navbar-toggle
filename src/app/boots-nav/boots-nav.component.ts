import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boots-nav',
  templateUrl: './boots-nav.component.html',
  styleUrls: ['./boots-nav.component.css']
})
export class BootsNavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  collapsed = true;
  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
  }
  
}
