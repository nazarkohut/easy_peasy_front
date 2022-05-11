import {Component, OnInit} from '@angular/core';
import {CookieService} from "../../../../../services/jwt/cookie/cookie.service";
import {AuthService} from "../../../../../services/auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-profile-menu-buttons',
  templateUrl: './profile-menu-buttons.component.html',
  styleUrls: ['./profile-menu-buttons.component.scss']
})
export class ProfileMenuButtonsComponent implements OnInit {

  constructor(private router: Router, private cookie: CookieService, private auth: AuthService) {
  }

  ngOnInit(): void {
  }

  logOut() {
    const refresh_token = this.cookie.getCookie('refresh_token');
    this.auth.logout({'refresh': String(refresh_token)}).subscribe(
      {
        next: (data) => {
          this.router.navigate(['login']);
        },
        error: (error) => {
          console.log(error)
        }
      }
    )
    this.cookie.clearCookie('access_token')
    this.cookie.clearCookie('refresh_token')
  }

}
