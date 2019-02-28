import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconSelecledStoreComponent } from './icon-selecled-store.component';

describe('IconSelecledStoreComponent', () => {
  let component: IconSelecledStoreComponent;
  let fixture: ComponentFixture<IconSelecledStoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconSelecledStoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconSelecledStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
