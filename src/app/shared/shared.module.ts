import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { HeaderComponent } from './header/header.component';
import { SideNavBarComponent } from './side-nav-bar/side-nav-bar.component';

@NgModule({
  declarations: [HeaderComponent, SideNavBarComponent],
  imports: [CommonModule, RouterModule, FormsModule],
  exports: [RouterModule, HeaderComponent, SideNavBarComponent],
  // entryComponents: [],
  providers: [],
})
export class SharedModule {}
