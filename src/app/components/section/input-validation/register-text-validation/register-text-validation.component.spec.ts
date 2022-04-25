import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterTextValidationComponent } from './register-text-validation.component';

describe('RegisterTextValidationComponent', () => {
  let component: RegisterTextValidationComponent;
  let fixture: ComponentFixture<RegisterTextValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterTextValidationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterTextValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
