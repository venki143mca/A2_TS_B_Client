import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EmployeeComponent } from './employee.list.component';
import { routing } from './employee.router';
import { SharedModule } from '../shared/shared.module';
import { EmployeeFilterPipe } from './../common/employee.filter';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    routing
  ],
  declarations: [
    EmployeeComponent,
    EmployeeFilterPipe
  ],
  bootstrap: [
    EmployeeComponent
  ]
})
export class EmployeeModule {}
