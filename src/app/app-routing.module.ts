import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { AuthHandlerComponent } from './auth-handler/auth-handler.component';
import { DashboardMainComponent } from './dashboard-main/dashboard-main.component';
import { PlatformDetailsComponent } from './platform-details/platform-details.component';
import { BulkPromoteComponent } from './bulk-promote/bulk-promote.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'auth-handler', component: AuthHandlerComponent },
  { path: 'dashboard', component: DashboardMainComponent },
  { path: 'platform-details', component: PlatformDetailsComponent },
  { path: 'bulk-promote', component: BulkPromoteComponent },
];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
