import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TopNavbarComponent } from './top-navbar/top-navbar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MatIconModule } from '@angular/material/icon';
import { AppAngularMaterialModule } from '../app-angular-material.module';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';

@NgModule({
  declarations: [TopNavbarComponent, SidenavComponent, LoadingSpinnerComponent],
  imports: [
    CommonModule,
    AppAngularMaterialModule,
    MatSidenavModule,
    MatListModule,
  ],
  exports: [TopNavbarComponent, SidenavComponent, LoadingSpinnerComponent],
})
export class SharedModule {}
