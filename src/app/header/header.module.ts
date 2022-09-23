import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopHeaderComponent } from './top-header/top-header.component';
import { BottomHeaderComponent } from './bottom-header/bottom-header.component';

@NgModule({
  declarations: [TopHeaderComponent, BottomHeaderComponent],
  imports: [CommonModule],
  exports: [TopHeaderComponent, BottomHeaderComponent],
})
export class HeaderModule {}
