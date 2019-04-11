import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogHieloComponent } from './dialog-hielo.component';

describe('DialogHieloComponent', () => {
  let component: DialogHieloComponent;
  let fixture: ComponentFixture<DialogHieloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogHieloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogHieloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
