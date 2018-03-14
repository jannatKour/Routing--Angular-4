import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministratorHomeComponent } from './administrator-home/administrator-home.component';
import { SettingsComponent } from './settings/settings.component';
import { AnnouncementsComponent } from './announcements/announcements.component';
import { AdministratorMainComponent } from './administrator-main/administrator-main.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AdministratorHomeComponent, SettingsComponent, AnnouncementsComponent, AdministratorMainComponent]
})
export class AdministratorModule { }
