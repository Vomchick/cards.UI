import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { AdminComponent } from './admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { AddModalFormComponent } from 'src/app/components/card/add-modal-form/add-modal-form.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { UpdateModalFormComponent } from 'src/app/components/card/update-modal-form/update-modal-form.component';

@NgModule({
  declarations: [
    AdminComponent,
    AddModalFormComponent,
    UpdateModalFormComponent,
  ],
  imports: [
    CommonModule,
    NzFormModule,
    NzTableModule,
    NzDividerModule,
    FormsModule,
    NzGridModule,
    NzButtonModule,
    NzInputModule,
    ReactiveFormsModule,
    NzModalModule,
    NzIconModule,
  ],
})
export class AdminModule {}
