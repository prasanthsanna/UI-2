import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

//components
import { AppComponent } from './app.component';
import { AuthHandlerComponent } from './auth-handler/auth-handler.component';
import { DeploymentListComponent } from './deployment-list/deployment-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardMainComponent } from './dashboard-main/dashboard-main.component';
import { HeaderComponent } from './header/header.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { PlatformDetailsComponent } from './platform-details/platform-details.component';
import { CreatePlatformComponent } from './platform-details/create-platform/create-platform.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthHandlerComponent,
    DeploymentListComponent,
    DashboardMainComponent,
    HeaderComponent,
    MenuBarComponent,
    PlatformDetailsComponent,
    CreatePlatformComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatButtonModule,
    MatDialogModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
