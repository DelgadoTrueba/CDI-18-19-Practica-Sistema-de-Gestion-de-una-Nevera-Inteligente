import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarnePescadoComponent } from './carne-pescado.component';

describe('CarnePescadoComponent', () => {
  let component: CarnePescadoComponent;
  let fixture: ComponentFixture<CarnePescadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarnePescadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarnePescadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
