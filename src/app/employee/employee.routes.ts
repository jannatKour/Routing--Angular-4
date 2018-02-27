import { Routes } from "@angular/router";
import { EmployeeHomeComponent } from "./employee-home/employee-home.component";
import { DeliveryTeamComponent } from "./delivery-team/delivery-team.component";
import { ItTeamComponent } from "./it-team/it-team.component";
import { BdTeamComponent } from "./bd-team/bd-team.component";
import { EmployeeMainComponent } from "./employee-main/employee-main.component";

export const EMPLOYEE_ROUTES: Routes = [
    {
      path: 'employee',
      component: EmployeeMainComponent
    },
    {
      path: 'employee-home',
      component: EmployeeHomeComponent
    },
    {
      path: 'delivery',
      component: DeliveryTeamComponent
    },
    {
      path: 'it',
      component: ItTeamComponent
    },
    {
      path: 'bd',
      component: BdTeamComponent
    }
  ];
  