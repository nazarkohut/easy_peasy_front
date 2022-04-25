import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginUsernameValidationComponent } from './login-username-validation.component';

describe('LoginUsernameValidationComponent', () => {
  let component: LoginUsernameValidationComponent;
  let fixture: ComponentFixture<LoginUsernameValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginUsernameValidationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginUsernameValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
