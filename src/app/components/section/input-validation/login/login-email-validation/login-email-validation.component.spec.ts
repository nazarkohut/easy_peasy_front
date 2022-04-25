import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginEmailValidationComponent } from './login-email-validation.component';

describe('LoginEmailValidationComponent', () => {
  let component: LoginEmailValidationComponent;
  let fixture: ComponentFixture<LoginEmailValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginEmailValidationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginEmailValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
