import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { InfoComponent } from './info.component';

@NgModule({
  declarations: [InfoComponent],
  imports: [CommonModule, NzTableModule, NzDividerModule],
})
export class InfoModule {}
