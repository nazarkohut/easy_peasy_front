import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationAuthButtonComponent } from './navigation-auth-button.component';

describe('NavigationAuthButtonComponent', () => {
  let component: NavigationAuthButtonComponent;
  let fixture: ComponentFixture<NavigationAuthButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigationAuthButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationAuthButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
