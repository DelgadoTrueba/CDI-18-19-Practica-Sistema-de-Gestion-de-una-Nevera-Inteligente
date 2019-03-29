import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostradorAlimentosMocilComponent } from './mostrador-alimentos-mocil.component';

describe('MostradorAlimentosMocilComponent', () => {
  let component: MostradorAlimentosMocilComponent;
  let fixture: ComponentFixture<MostradorAlimentosMocilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostradorAlimentosMocilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostradorAlimentosMocilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
