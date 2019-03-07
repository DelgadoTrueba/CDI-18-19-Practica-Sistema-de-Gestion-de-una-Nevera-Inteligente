import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LateralIzqComponent } from './lateral-izq.component';

describe('LateralIzqComponent', () => {
  let component: LateralIzqComponent;
  let fixture: ComponentFixture<LateralIzqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LateralIzqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LateralIzqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
