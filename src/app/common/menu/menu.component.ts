import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
roles:any;
  constructor() { }
changeMenuItems(id){
  this.roles=id;
  console.log(this.roles);
}
  ngOnInit() {
  }

}
