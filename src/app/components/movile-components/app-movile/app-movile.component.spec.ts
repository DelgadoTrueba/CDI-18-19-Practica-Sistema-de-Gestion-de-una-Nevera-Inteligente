import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppMovileComponent } from './app-movile.component';

describe('AppMovileComponent', () => {
  let component: AppMovileComponent;
  let fixture: ComponentFixture<AppMovileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppMovileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppMovileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
