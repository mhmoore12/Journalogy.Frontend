import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IndexUserViewModel, CreateUserViewModel, EditUserViewModel } from '../data';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'https://localhost:7183/api/User';

  constructor(private httpClient: HttpClient) {}

  getAll(pageIndex: number, pageSize: number): Observable<IndexUserViewModel[]> {
    return this.httpClient.get<IndexUserViewModel[]>(`${this.apiUrl}?pageIndex=${pageIndex}&pageSize=${pageSize}`);
  }

  get(id: number): Observable<IndexUserViewModel> {
    return this.httpClient.get<IndexUserViewModel>(`${this.apiUrl}/${id}`);
  }

  create(model: CreateUserViewModel): Observable<any> {
    return this.httpClient.post(this.apiUrl, model);
  }

  update(id: number, model: EditUserViewModel): Observable<any> {
    return this.httpClient.put(`${this.apiUrl}/${id}`, model);
  }

  delete(id: number): Observable<any> {
    return this.httpClient.delete(`${this.apiUrl}/${id}`);
  }
}