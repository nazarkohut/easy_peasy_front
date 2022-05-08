import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileMenuFooterDecorationComponent } from './profile-menu-footer-decoration.component';

describe('ProfileMenuFooterDecorationComponent', () => {
  let component: ProfileMenuFooterDecorationComponent;
  let fixture: ComponentFixture<ProfileMenuFooterDecorationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileMenuFooterDecorationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileMenuFooterDecorationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
