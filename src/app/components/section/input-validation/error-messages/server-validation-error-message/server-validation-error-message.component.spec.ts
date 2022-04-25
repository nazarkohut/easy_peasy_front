import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerValidationErrorMessageComponent } from './server-validation-error-message.component';

describe('ServerValidationErrorMessageComponent', () => {
  let component: ServerValidationErrorMessageComponent;
  let fixture: ComponentFixture<ServerValidationErrorMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServerValidationErrorMessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerValidationErrorMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
