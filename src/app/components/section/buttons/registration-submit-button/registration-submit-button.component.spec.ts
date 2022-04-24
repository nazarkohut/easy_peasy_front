import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationSubmitButtonComponent } from './registration-submit-button.component';

describe('RegistrationSubmitButtonComponent', () => {
  let component: RegistrationSubmitButtonComponent;
  let fixture: ComponentFixture<RegistrationSubmitButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationSubmitButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationSubmitButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
