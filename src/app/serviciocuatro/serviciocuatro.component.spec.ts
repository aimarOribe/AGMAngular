import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciocuatroComponent } from './serviciocuatro.component';

describe('ServiciocuatroComponent', () => {
  let component: ServiciocuatroComponent;
  let fixture: ComponentFixture<ServiciocuatroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiciocuatroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiciocuatroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
