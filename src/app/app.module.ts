import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { EmployeeModule } from './employee/employee.module';
import { APP_ROUTES } from './app.routes';
import { HrModule } from './hr/hr.module';
import { AdministratorModule } from './administrator/administrator.module';
import { MenuComponent } from './common/menu/menu.component';
import { NavbarComponent } from './common/navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    EmployeeModule,
    HrModule,
    AdministratorModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
