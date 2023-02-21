import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPgeComponent } from './landing-pge.component';

describe('LandingPgeComponent', () => {
  let component: LandingPgeComponent;
  let fixture: ComponentFixture<LandingPgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingPgeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingPgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
