import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelecledSettingComponent } from './icon-selecled-setting.component';

describe('SelecledSettingComponent', () => {
  let component: SelecledSettingComponent;
  let fixture: ComponentFixture<SelecledSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelecledSettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelecledSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
