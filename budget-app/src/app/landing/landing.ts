import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-landing',
  imports: [],
  templateUrl: './landing.html',
  styleUrl: './landing.scss'
})
export class Landing {
  constructor (
    private auth: AuthService
  ) {}

  login() {
    this.auth.loginWithRedirect();
  }
}
