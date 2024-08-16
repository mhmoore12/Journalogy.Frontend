import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { VacationService } from '../../api/vacation.service';
import { JournalEntryService } from '../../api/journal-entry.service';
import { IndexVacationViewModel } from '../../data/vacation';
import { IndexJournalEntryViewModel } from '../../data/journalentry';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  isLoading = true;
  selectedVacationStatus = 1;
  vacationColumns: string[] = ['name', 'participants', 'description'];
  journalColumns: string[] = ['author', 'content', 'actions'];
  vacationDataSource = new MatTableDataSource<IndexVacationViewModel>();
  journalDataSource = new MatTableDataSource<IndexJournalEntryViewModel>();

  @ViewChild(MatPaginator) vacationPaginator!: MatPaginator;
  @ViewChild(MatPaginator) journalPaginator!: MatPaginator;

  constructor(
    private vacationService: VacationService,
    private journalEntryService: JournalEntryService
  ) {}

  ngOnInit(): void {
    this.loadVacations();

    this.journalEntryService.getAll(1, 10).subscribe({
      next: (data) => {
        this.journalDataSource.data = data;
        this.journalDataSource.paginator = this.journalPaginator;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error fetching journal entries:', error);
        this.isLoading = false;
      },
    });
  }

  loadVacations(): void {
    this.vacationService.getAll(1, 10).subscribe({
      next: (data) => {
        this.vacationDataSource.data = data.filter(
          (v) =>
            this.selectedVacationStatus === 0 ||
            v.vacationStatus === this.selectedVacationStatus
        );
        this.vacationDataSource.paginator = this.vacationPaginator;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error fetching vacations:', error);
        this.isLoading = false;
      },
    });
  }

  filterVacations(): void {
    this.loadVacations();
  }

  respondToEntry(entry: IndexJournalEntryViewModel): void {
    console.log('User wants to respond to:', entry);
  }
}
