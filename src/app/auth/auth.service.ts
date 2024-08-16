import { Injectable } from '@angular/core';
import { AuthService as Auth0Service } from '@auth0/auth0-angular';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(public auth0Service: Auth0Service) {}

  login() {
    this.auth0Service.loginWithRedirect();
  }

  logout() {
    this.auth0Service.logout();
  }

  isAuthenticated$ = this.auth0Service.isAuthenticated$;
}