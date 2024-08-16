import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import {
  EditVacationViewModel,
  IndexVacationViewModel,
} from '../../../data/vacation';
import { VacationService } from '../../../api/vacation.service';

@Component({
  selector: 'app-edit-vacation-dialog',
  templateUrl: './edit-vacation-dialog.component.html',
  styleUrls: ['./edit-vacation-dialog.component.scss'],
})
export class EditVacationDialogComponent {
  vacationData: EditVacationViewModel;

  constructor(
    public dialogRef: MatDialogRef<EditVacationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: EditVacationViewModel,
    private vacationService: VacationService
  ) {
    this.vacationData = { ...data };
  }

  save() {
    this.vacationService
      .update(this.vacationData.id, this.vacationData)
      .subscribe(
        (response: IndexVacationViewModel) => {
          console.log('Vacation updated:', response);
          this.dialogRef.close(this.vacationData);
        },
        (error: any) => {
          // Explicitly defining the type
          console.error('Error updating vacation:', error);
          this.dialogRef.close();
        }
      );
  }

  cancel() {
    this.dialogRef.close();
  }
}
