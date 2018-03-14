import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeHomeComponent } from './employee-home/employee-home.component';
import { BdTeamComponent } from './bd-team/bd-team.component';
import { DeliveryTeamComponent } from './delivery-team/delivery-team.component';
import { ItTeamComponent } from './it-team/it-team.component';
import { RouterModule } from '@angular/router';
import { EMPLOYEE_ROUTES } from './employee.routes';
import { EmployeeMainComponent } from './employee-main/employee-main.component';
// import { MenuComponent } from '../common/menu/menu.component';
// import { NavbarComponent } from '../common/navbar/navbar.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(EMPLOYEE_ROUTES)
  ],
  declarations: [EmployeeHomeComponent, BdTeamComponent, DeliveryTeamComponent, ItTeamComponent, EmployeeMainComponent],
  exports: [
    EmployeeHomeComponent,
    BdTeamComponent,
    DeliveryTeamComponent,
    ItTeamComponent
  ]
})
export class EmployeeModule { }
