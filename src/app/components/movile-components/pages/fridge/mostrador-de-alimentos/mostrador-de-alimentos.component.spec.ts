import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostradorDeAlimentosComponent } from './mostrador-de-alimentos.component';

describe('MostradorDeAlimentosComponent', () => {
  let component: MostradorDeAlimentosComponent;
  let fixture: ComponentFixture<MostradorDeAlimentosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostradorDeAlimentosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostradorDeAlimentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
