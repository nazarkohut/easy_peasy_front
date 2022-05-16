import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Route, Router} from "@angular/router";
import {AuthService} from "../../../services/auth/auth.service";

@Component({
  selector: 'app-activate-account',
  templateUrl: './activate-account.component.html',
  styleUrls: ['./activate-account.component.scss']
})
export class ActivateAccountComponent implements OnInit {
  params: { uid: string, token: string } = {uid: '', token: ''};

  constructor(private route: Router, private activeRoute: ActivatedRoute, private auth: AuthService) {
  }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(params => {
      this.params = params as { uid: string, token: string };
    });


    this.auth.activateAccount(this.params).subscribe({
      next: (data) => {
        // this.route.navigate(['login']);
      },
      error: (error) => {
        this.route.navigate(['page-not-found']);
      }
    })
  }

}
