import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IndexJournalEntryParticipantViewModel, CreateJournalEntryParticipantViewModel, EditJournalEntryParticipantViewModel } from '../data';

@Injectable({
  providedIn: 'root',
})
export class JournalEntryParticipantService {
  private apiUrl = 'https://localhost:7183/api/JournalEntryParticipant';

  constructor(private httpClient: HttpClient) {}

  getAll(pageIndex: number, pageSize: number): Observable<IndexJournalEntryParticipantViewModel[]> {
    return this.httpClient.get<IndexJournalEntryParticipantViewModel[]>(`${this.apiUrl}?pageIndex=${pageIndex}&pageSize=${pageSize}`);
  }

  get(id: number): Observable<IndexJournalEntryParticipantViewModel> {
    return this.httpClient.get<IndexJournalEntryParticipantViewModel>(`${this.apiUrl}/${id}`);
  }

  create(model: CreateJournalEntryParticipantViewModel): Observable<any> {
    return this.httpClient.post(this.apiUrl, model);
  }

  update(id: number, model: EditJournalEntryParticipantViewModel): Observable<any> {
    return this.httpClient.put(`${this.apiUrl}/${id}`, model);
  }

  delete(id: number): Observable<any> {
    return this.httpClient.delete(`${this.apiUrl}/${id}`);
  }
}