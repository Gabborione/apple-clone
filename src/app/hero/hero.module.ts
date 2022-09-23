import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroFirstComponent } from './hero-first/hero-first.component';

@NgModule({
  declarations: [HeroFirstComponent],
  imports: [CommonModule],
  exports: [HeroFirstComponent],
})
export class HeroModule {}
