import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconKitchenComponent } from './icon-kitchen.component';

describe('IconKitchenComponent', () => {
  let component: IconKitchenComponent;
  let fixture: ComponentFixture<IconKitchenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconKitchenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconKitchenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
