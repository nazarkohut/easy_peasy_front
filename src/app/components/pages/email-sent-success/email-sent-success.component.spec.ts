import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailSentSuccessComponent } from './email-sent-success.component';

describe('ResetPasswordSuccessComponent', () => {
  let component: EmailSentSuccessComponent;
  let fixture: ComponentFixture<EmailSentSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailSentSuccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailSentSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
