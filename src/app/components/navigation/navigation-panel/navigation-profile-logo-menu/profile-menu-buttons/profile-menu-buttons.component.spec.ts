import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ProfileMenuButtonsComponent} from './profile-menu-buttons.component';

describe('ProfileMenuButtonsComponent', () => {
  let component: ProfileMenuButtonsComponent;
  let fixture: ComponentFixture<ProfileMenuButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfileMenuButtonsComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileMenuButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
