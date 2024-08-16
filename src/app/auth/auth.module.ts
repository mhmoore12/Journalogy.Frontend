import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  AuthModule as Auth0Module,
  AuthService as Auth0Service,
} from '@auth0/auth0-angular';

@NgModule({
  imports: [
    CommonModule,
    Auth0Module.forRoot({
      domain: 'dev-bp2q3f4bbpzvofe8.us.auth0.com',
      clientId: 'oZOB6MjSAzgXUKc1nOM8j9fVH2YK2hSw',
      authorizationParams: {
        redirect_uri: window.location.origin,
      },
    }),
  ],
  providers: [Auth0Service],
})
export class AuthModule {}
