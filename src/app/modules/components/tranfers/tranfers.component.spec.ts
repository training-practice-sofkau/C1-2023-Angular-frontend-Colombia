import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranfersComponent } from './tranfers.component';

describe('TranfersComponent', () => {
  let component: TranfersComponent;
  let fixture: ComponentFixture<TranfersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TranfersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TranfersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
