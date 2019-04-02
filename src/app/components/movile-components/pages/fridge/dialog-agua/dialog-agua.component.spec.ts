import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAguaComponent } from './dialog-agua.component';

describe('DialogAguaComponent', () => {
  let component: DialogAguaComponent;
  let fixture: ComponentFixture<DialogAguaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogAguaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogAguaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
