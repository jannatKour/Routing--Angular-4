import {Routes} from "@angular/router";
import { HrMainComponent } from "./hr-main/hr-main.component";
import { HrHomeComponent } from "./hr-home/hr-home.component";
import { AdminComponent } from "./admin/admin.component";
import { FinanceComponent } from "./finance/finance.component";
import { RecruitmentComponent } from "./recruitment/recruitment.component";

export const HR_ROUTES: Routes = [
    {
        path:'hr',
        component:HrMainComponent,
        children: [
            {
                path: 'hr-home',
                component: HrHomeComponent
            },
            {
                path: 'admin',
                component: AdminComponent
            },
            {
                path: 'finance',
                component: FinanceComponent
            },
            {
                path: 'recruitment',
                component: RecruitmentComponent
            }
        ]
    }
]