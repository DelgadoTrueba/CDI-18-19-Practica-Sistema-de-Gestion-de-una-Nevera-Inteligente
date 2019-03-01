import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconSelecledKitchenComponent } from './icon-selecled-kitchen.component';

describe('IconSelecledKitchenComponent', () => {
  let component: IconSelecledKitchenComponent;
  let fixture: ComponentFixture<IconSelecledKitchenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconSelecledKitchenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconSelecledKitchenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
