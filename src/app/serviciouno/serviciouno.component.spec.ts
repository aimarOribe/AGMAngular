import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciounoComponent } from './serviciouno.component';

describe('ServiciounoComponent', () => {
  let component: ServiciounoComponent;
  let fixture: ComponentFixture<ServiciounoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiciounoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiciounoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
