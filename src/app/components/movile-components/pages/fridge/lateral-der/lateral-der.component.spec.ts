import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LateralDerComponent } from './lateral-der.component';

describe('LateralDerComponent', () => {
  let component: LateralDerComponent;
  let fixture: ComponentFixture<LateralDerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LateralDerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LateralDerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
