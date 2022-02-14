import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciodosComponent } from './serviciodos.component';

describe('ServiciodosComponent', () => {
  let component: ServiciodosComponent;
  let fixture: ComponentFixture<ServiciodosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiciodosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiciodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
