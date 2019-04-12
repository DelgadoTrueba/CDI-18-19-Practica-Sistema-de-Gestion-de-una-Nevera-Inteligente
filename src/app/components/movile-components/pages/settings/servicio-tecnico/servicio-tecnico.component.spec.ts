import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicioTecnicoComponent } from './servicio-tecnico.component';

describe('ServicioTecnicoComponent', () => {
  let component: ServicioTecnicoComponent;
  let fixture: ComponentFixture<ServicioTecnicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicioTecnicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicioTecnicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
