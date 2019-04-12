import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeasParaComerComponent } from './ideas-para-comer.component';

describe('IdeasParaComerComponent', () => {
  let component: IdeasParaComerComponent;
  let fixture: ComponentFixture<IdeasParaComerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdeasParaComerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdeasParaComerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
