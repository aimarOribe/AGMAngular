import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciotresComponent } from './serviciotres.component';

describe('ServiciotresComponent', () => {
  let component: ServiciotresComponent;
  let fixture: ComponentFixture<ServiciotresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiciotresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiciotresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
