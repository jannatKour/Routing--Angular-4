import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() role;
  constructor() {
  }

  ngOnInit() {
    if(this.role===undefined){
      this.role='EMPLOYEE';
    }
  }

}
