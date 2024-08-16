import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IndexVacationParticipantViewModel, CreateVacationParticipantViewModel, EditVacationParticipantViewModel } from '../data';

@Injectable({
  providedIn: 'root',
})
export class VacationParticipantService {
  private apiUrl = 'https://localhost:7183/api/VacationParticipant';

  constructor(private httpClient: HttpClient) {}

  getAll(pageIndex: number, pageSize: number): Observable<IndexVacationParticipantViewModel[]> {
    return this.httpClient.get<IndexVacationParticipantViewModel[]>(`${this.apiUrl}?pageIndex=${pageIndex}&pageSize=${pageSize}`);
  }

  get(id: number): Observable<IndexVacationParticipantViewModel> {
    return this.httpClient.get<IndexVacationParticipantViewModel>(`${this.apiUrl}/${id}`);
  }

  create(model: CreateVacationParticipantViewModel): Observable<any> {
    return this.httpClient.post(this.apiUrl, model);
  }

  update(id: number, model: EditVacationParticipantViewModel): Observable<any> {
    return this.httpClient.put(`${this.apiUrl}/${id}`, model);
  }

  delete(id: number): Observable<any> {
    return this.httpClient.delete(`${this.apiUrl}/${id}`);
  }
}