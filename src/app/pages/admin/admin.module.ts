import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { AdminComponent } from './admin.component';
import { FormsModule } from '@angular/forms';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzButtonModule } from 'ng-zorro-antd/button';

@NgModule({
  declarations: [AdminComponent],
  imports: [
    CommonModule,
    NzFormModule,
    NzTableModule,
    NzDividerModule,
    FormsModule,
    NzGridModule,
    NzButtonModule,
  ],
})
export class AdminModule {}