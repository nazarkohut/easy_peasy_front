import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationProfileLogoMenuComponent } from './navigation-profile-logo-menu.component';

describe('NavigationProfileLogoMenuComponent', () => {
  let component: NavigationProfileLogoMenuComponent;
  let fixture: ComponentFixture<NavigationProfileLogoMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigationProfileLogoMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationProfileLogoMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
