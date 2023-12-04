import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import * as CONFIG from './config.const';

import { DashboardComponent } from './etp/dashboard/dashboard/dashboard.component';
import { PlatformDetailsComponent } from './etp/platforms/platform-details/platform-details.component';

const prefix = CONFIG.apiPrefix;

const routes: Routes = [
  { path: '', redirectTo: prefix + '/dashboard', pathMatch: 'full' },
  { path: prefix, redirectTo: prefix + '/dashboard', pathMatch: 'full' },
  { path: prefix + '/dashboard', component: DashboardComponent },
  {
    path: prefix + '/dashboard',
    loadChildren: () => import('./etp/etp.module').then((m) => m.EtpModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
