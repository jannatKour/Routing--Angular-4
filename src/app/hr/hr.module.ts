import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HrMainComponent } from './hr-main/hr-main.component';
import { HrHomeComponent } from './hr-home/hr-home.component';
import { AdminComponent } from './admin/admin.component';
import { FinanceComponent } from './finance/finance.component';
import { RecruitmentComponent } from './recruitment/recruitment.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HrMainComponent, HrHomeComponent, AdminComponent, FinanceComponent, RecruitmentComponent]
})
export class HrModule { }
