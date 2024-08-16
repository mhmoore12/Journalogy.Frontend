import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

import {
  CreateVacationViewModel,
  IndexVacationViewModel,
} from '../../../data/vacation';
import { VacationService } from '../../../api/vacation.service';

@Component({
  selector: 'app-create-vacation-dialog',
  templateUrl: './create-vacation-dialog.component.html',
  styleUrls: ['./create-vacation-dialog.component.scss'],
})
export class CreateVacationDialogComponent {
  vacationData: CreateVacationViewModel = {
    name: '',
    location: '',
    startDate: '',
    endDate: '',
    description: '',
    vacationStatus: 0,
  };

  constructor(
    public dialogRef: MatDialogRef<CreateVacationDialogComponent>,
    private vacationService: VacationService
  ) {}

  save() {
    this.vacationService.create(this.vacationData).subscribe(
      (response: IndexVacationViewModel) => {
        console.log('Vacation created:', response);
        this.dialogRef.close(this.vacationData);
      },
      (error: any) => {
        console.error('Error creating vacation:', error);
        this.dialogRef.close();
      }
    );
  }

  cancel() {
    this.dialogRef.close();
  }
}
