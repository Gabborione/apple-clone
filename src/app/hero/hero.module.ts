import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroFirstComponent } from './hero-first/hero-first.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { SectionDividerComponent } from './section-divider/section-divider.component';
import { IslandComponent } from './island/island.component';

@NgModule({
  declarations: [HeroFirstComponent, HeroListComponent, SectionDividerComponent, IslandComponent],
  imports: [CommonModule],
  exports: [HeroFirstComponent],
})
export class HeroModule {}
