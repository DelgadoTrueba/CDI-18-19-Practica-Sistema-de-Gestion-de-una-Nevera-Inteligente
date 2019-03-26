import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogInfoAlimentoComponent } from './dialog-info-alimento.component';

describe('DialogInfoAlimentoComponent', () => {
  let component: DialogInfoAlimentoComponent;
  let fixture: ComponentFixture<DialogInfoAlimentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogInfoAlimentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogInfoAlimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
