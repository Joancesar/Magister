import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './logo/logo.component';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { StepsComponent } from './steps/steps.component';
import { RouterModule } from '@angular/router';
import { SelectComponent } from './select/select.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OptionListComponent } from './option-list/option-list.component';
import { InputComponent } from './input/input.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { SendFormGuard } from './send-form.guard';

@NgModule({
  declarations: [
    LogoComponent, 
    StepsComponent, 
    SelectComponent, 
    OptionListComponent, 
    InputComponent, 
    CheckboxComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    LogoComponent,
    StepsComponent,
    SelectComponent,
    OptionListComponent,
    InputComponent,
    CheckboxComponent,
    
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [
    SendFormGuard
  ]
})
export class SharedModule { }
