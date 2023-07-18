import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as env, environment } from '@env/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  get() {
    return this.http.get(`${environment.apiRoot}/get`);
  }
}
