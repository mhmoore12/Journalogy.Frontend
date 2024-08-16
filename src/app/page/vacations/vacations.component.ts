import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { VacationService } from '../../api/vacation.service';
import { IndexVacationViewModel } from '../../data';
import { CreateVacationDialogComponent } from './create-vacation-dialog/create-vacation-dialog.component';
import { EditVacationDialogComponent } from './edit-vacation-dialog/edit-vacation-dialog.component';

@Component({
  selector: 'app-vacations',
  templateUrl: './vacations.component.html',
  styleUrls: ['./vacations.component.scss']
})
export class VacationsComponent implements OnInit {
  isLoading = true;
  displayedColumns: string[] = ['name', 'location', 'status', 'actions'];
  dataSource = new MatTableDataSource<IndexVacationViewModel>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private vacationService: VacationService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.loadVacations();
  }

  loadVacations(): void {
    this.vacationService.getAll(1, 10).subscribe(
      data => {
        this.dataSource.data = data;
        this.dataSource.paginator = this.paginator;
        this.isLoading = false;
      },
      error => {
        console.error('Error fetching vacations:', error);
        this.isLoading = false;
      }
    );
  }

  openCreateDialog(): void {
    const dialogRef = this.dialog.open(CreateVacationDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Vacation created:', result);
        // You can add service call to save the vacation
        this.loadVacations(); // Refresh the list after creating
      }
    });
  }

  openEditDialog(vacation: IndexVacationViewModel): void {
    console.log('Editing vacation:', vacation);
    this.dialog.open(EditVacationDialogComponent, {
      data: vacation
    });
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}