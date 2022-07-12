import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './logo/logo.component';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { StepsComponent } from './steps/steps.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [LogoComponent, StepsComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    LogoComponent,
    StepsComponent,
    
    MatButtonModule,
    MatIconModule
  ]
})
export class SharedModule { }
