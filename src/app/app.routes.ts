import { Routes } from "@angular/router";
import { EmployeeMainComponent } from "./employee/employee-main/employee-main.component";
import { HrMainComponent } from "./hr/hr-main/hr-main.component";
import { AdministratorMainComponent } from "./administrator/administrator-main/administrator-main.component";

export const APP_ROUTES: Routes = [
    {path: '', redirectTo:'employee', pathMatch: 'full' },
    {path: 'employee', component:EmployeeMainComponent },
    {path: 'hr', component:HrMainComponent },
    {path: 'administrator', component:AdministratorMainComponent },

]