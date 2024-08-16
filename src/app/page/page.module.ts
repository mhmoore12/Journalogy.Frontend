import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';  // <-- Import FormsModule
import { HomeComponent } from './home/home.component';
import { VacationsComponent } from './vacations/vacations.component';
import { CreateVacationDialogComponent } from './vacations/create-vacation-dialog/create-vacation-dialog.component';
import { EditVacationDialogComponent } from './vacations/edit-vacation-dialog/edit-vacation-dialog.component';
import { AppAngularMaterialModule } from '../app-angular-material.module';
import { JoinPipe } from '../pipes/join.pipe';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    HomeComponent,
    VacationsComponent,
    CreateVacationDialogComponent,
    EditVacationDialogComponent,
    JoinPipe,
  ],
  imports: [CommonModule, FormsModule, AppAngularMaterialModule, SharedModule], // include FormsModule
  exports: [HomeComponent, VacationsComponent, JoinPipe],
})
export class PageModule {}
