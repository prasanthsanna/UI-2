import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes, Router } from '@angular/router';
import * as CONFIG from '../config.const';

//Modules
import { DashboardModule } from './dashboard/dashboard.module';
import { PlatformsModule } from './platforms/platforms.module';

import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { PlatformDetailsComponent } from './platforms/platform-details/platform-details.component';

const prefix = CONFIG.apiPrefix;

const etpRoutes: Routes = [
  { path: prefix + '/dashboard', component: DashboardComponent },
  { path: prefix + '/platforms', component: PlatformDetailsComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(etpRoutes),
    DashboardModule,
    PlatformsModule,
  ],
  exports: [DashboardModule, PlatformsModule],
  providers: [],
})
export class EtpModule {}
