import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFoundFormComponent } from './not-found-form.component';

describe('NotFoundFormComponent', () => {
  let component: NotFoundFormComponent;
  let fixture: ComponentFixture<NotFoundFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotFoundFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotFoundFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
