import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterSuccessFormComponent } from './register-success-form.component';

describe('RegisterSuccessFormComponent', () => {
  let component: RegisterSuccessFormComponent;
  let fixture: ComponentFixture<RegisterSuccessFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterSuccessFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterSuccessFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
