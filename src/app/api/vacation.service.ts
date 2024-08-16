import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IndexVacationViewModel, CreateVacationViewModel, EditVacationViewModel } from '../data';

@Injectable({
  providedIn: 'root',
})
export class VacationService {
  private apiUrl = 'https://localhost:7183/api/Vacation';

  constructor(private httpClient: HttpClient) {}

  getAll(pageIndex: number, pageSize: number): Observable<IndexVacationViewModel[]> {
    return this.httpClient.get<IndexVacationViewModel[]>(`${this.apiUrl}?pageIndex=${pageIndex}&pageSize=${pageSize}`);
  }

  get(id: number): Observable<IndexVacationViewModel> {
    return this.httpClient.get<IndexVacationViewModel>(`${this.apiUrl}/${id}`);
  }

  create(model: CreateVacationViewModel): Observable<any> {
    return this.httpClient.post(this.apiUrl, model);
  }

  update(id: number, model: EditVacationViewModel): Observable<any> {
    return this.httpClient.put(`${this.apiUrl}/${id}`, model);
  }

  delete(id: number): Observable<any> {
    return this.httpClient.delete(`${this.apiUrl}/${id}`);
  }
}