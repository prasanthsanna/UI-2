import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

import { PlatformDetailsComponent } from './platform-details/platform-details.component';
import { CreatePlatformComponent } from './create-platform/create-platform.component';

@NgModule({
  declarations: [PlatformDetailsComponent, CreatePlatformComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
  ],
})
export class PlatformsModule {}
