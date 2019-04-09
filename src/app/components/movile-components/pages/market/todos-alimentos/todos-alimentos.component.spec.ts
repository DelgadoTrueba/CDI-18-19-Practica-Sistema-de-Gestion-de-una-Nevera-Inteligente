import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosAlimentosComponent } from './todos-alimentos.component';

describe('TodosAlimentosComponent', () => {
  let component: TodosAlimentosComponent;
  let fixture: ComponentFixture<TodosAlimentosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodosAlimentosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosAlimentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
