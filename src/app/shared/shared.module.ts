import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './logo/logo.component';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { StepsComponent } from './steps/steps.component';
import { RouterModule } from '@angular/router';
import { SelectComponent } from './select/select.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [LogoComponent, StepsComponent, SelectComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    LogoComponent,
    StepsComponent,
    SelectComponent,
    
    FormsModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class SharedModule { }
