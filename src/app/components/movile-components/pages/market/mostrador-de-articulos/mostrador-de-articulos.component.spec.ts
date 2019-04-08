import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostradorDeArticulosComponent } from './mostrador-de-articulos.component';

describe('MostradorDeArticulosComponent', () => {
  let component: MostradorDeArticulosComponent;
  let fixture: ComponentFixture<MostradorDeArticulosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostradorDeArticulosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostradorDeArticulosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
