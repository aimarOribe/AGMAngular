import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarserviciosComponent } from './carservicios.component';

describe('CarserviciosComponent', () => {
  let component: CarserviciosComponent;
  let fixture: ComponentFixture<CarserviciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarserviciosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarserviciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
