import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerdurasComponent } from './verduras.component';

describe('VerdurasComponent', () => {
  let component: VerdurasComponent;
  let fixture: ComponentFixture<VerdurasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerdurasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerdurasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
