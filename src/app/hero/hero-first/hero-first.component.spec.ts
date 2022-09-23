import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroFirstComponent } from './hero-first.component';

describe('HeroFirstComponent', () => {
  let component: HeroFirstComponent;
  let fixture: ComponentFixture<HeroFirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroFirstComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
