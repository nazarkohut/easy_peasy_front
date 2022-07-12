import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailSentSuccessFormComponent } from './email-sent-success-form.component';

describe('ResetPasswordSuccessComponent', () => {
  let component: EmailSentSuccessFormComponent;
  let fixture: ComponentFixture<EmailSentSuccessFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailSentSuccessFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailSentSuccessFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
