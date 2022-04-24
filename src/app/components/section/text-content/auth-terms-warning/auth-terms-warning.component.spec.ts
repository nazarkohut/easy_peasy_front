import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthTermsWarningComponent } from './auth-terms-warning.component';

describe('AuthTermsWarningComponent', () => {
  let component: AuthTermsWarningComponent;
  let fixture: ComponentFixture<AuthTermsWarningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthTermsWarningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthTermsWarningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
