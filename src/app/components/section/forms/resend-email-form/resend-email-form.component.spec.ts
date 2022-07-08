import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResendEmailFormComponent } from './resend-email-form.component';

describe('ResendEmailComponent', () => {
  let component: ResendEmailFormComponent;
  let fixture: ComponentFixture<ResendEmailFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResendEmailFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResendEmailFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
