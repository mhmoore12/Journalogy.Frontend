import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IndexJournalEntryViewModel, CreateJournalEntryViewModel, EditJournalEntryViewModel } from '../data';

@Injectable({
  providedIn: 'root',
})
export class JournalEntryService {
  private apiUrl = 'https://localhost:7183/api/JournalEntry';

  constructor(private httpClient: HttpClient) {}

  getAll(pageIndex: number, pageSize: number): Observable<IndexJournalEntryViewModel[]> {
    return this.httpClient.get<IndexJournalEntryViewModel[]>(`${this.apiUrl}?pageIndex=${pageIndex}&pageSize=${pageSize}`);
  }

  get(id: number): Observable<IndexJournalEntryViewModel> {
    return this.httpClient.get<IndexJournalEntryViewModel>(`${this.apiUrl}/${id}`);
  }

  create(model: CreateJournalEntryViewModel): Observable<any> {
    return this.httpClient.post(this.apiUrl, model);
  }

  update(id: number, model: EditJournalEntryViewModel): Observable<any> {
    return this.httpClient.put(`${this.apiUrl}/${id}`, model);
  }

  delete(id: number): Observable<any> {
    return this.httpClient.delete(`${this.apiUrl}/${id}`);
  }
}