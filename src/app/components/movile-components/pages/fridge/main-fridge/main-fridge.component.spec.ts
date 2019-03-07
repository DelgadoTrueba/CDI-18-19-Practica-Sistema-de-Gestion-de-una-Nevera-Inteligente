import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainFridgeComponent } from './main-fridge.component';

describe('MainFridgeComponent', () => {
  let component: MainFridgeComponent;
  let fixture: ComponentFixture<MainFridgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainFridgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainFridgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
