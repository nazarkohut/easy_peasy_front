import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordChangedSuccessComponent } from './password-changed-success.component';

describe('PasswordChangedSuccessComponent', () => {
  let component: PasswordChangedSuccessComponent;
  let fixture: ComponentFixture<PasswordChangedSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasswordChangedSuccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordChangedSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
