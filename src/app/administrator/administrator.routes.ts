import {Routes} from "@angular/router";
import { AdministratorMainComponent } from "../administrator/administrator-main/administrator-main.component";
import { Component } from "@angular/core/src/metadata/directives";
import { AdministratorHomeComponent } from "../administrator/administrator-home/administrator-home.component";
import { AnnouncementsComponent } from "../administrator/announcements/announcements.component";
import { SettingsComponent } from "../administrator/settings/settings.component";

export const ADMIN_ROUTES: Routes = [
    {
        path: 'administrator',
        component: AdministratorMainComponent,
        children:[
            {
                path:'administrator-home',
                component: AdministratorHomeComponent
            },
            {
                path:'announcements',
                component: AnnouncementsComponent
            },
            {
                path:'settings',
                component: SettingsComponent
            }
        ]
    }
]