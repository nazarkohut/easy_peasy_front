import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordChangedSuccessFormComponent } from './password-changed-success-form.component';

describe('PasswordChangedSuccessFormComponent', () => {
  let component: PasswordChangedSuccessFormComponent;
  let fixture: ComponentFixture<PasswordChangedSuccessFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasswordChangedSuccessFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordChangedSuccessFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
