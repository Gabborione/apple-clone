import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroFirstComponent } from './hero-first/hero-first.component';
import { HeroListComponent } from './hero-list/hero-list.component';

@NgModule({
  declarations: [HeroFirstComponent, HeroListComponent],
  imports: [CommonModule],
  exports: [HeroFirstComponent],
})
export class HeroModule {}
