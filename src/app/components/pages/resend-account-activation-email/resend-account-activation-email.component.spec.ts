import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResendAccountActivationEmailComponent } from './resend-account-activation-email.component';

describe('ResendAccountActivationEmailComponent', () => {
  let component: ResendAccountActivationEmailComponent;
  let fixture: ComponentFixture<ResendAccountActivationEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResendAccountActivationEmailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResendAccountActivationEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
