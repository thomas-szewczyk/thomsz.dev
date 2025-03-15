import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { APP_CONFIG, AppConfig } from '@thomas-szewczyk-cv/core/tokens';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  config: AppConfig;

  constructor(private readonly http: HttpClient) {
    this.config = inject(APP_CONFIG);
  }

  get httpHeaders() {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
    });
  }

  get<T>(endpoint?: string, params?: HttpParams): Observable<T> {
    let fullUrl = `${this.config.apiUrl}`;

    if (endpoint) fullUrl = `${fullUrl}/${endpoint}`;

    return this.http.get<T>(fullUrl, {
      headers: this.httpHeaders,
      params,
    });
  }

  post<T>(endpoint: string, body: T, params?: HttpParams): Observable<T> {
    const fullUrl = `${this.config.apiUrl}/${endpoint}`;
    return this.http.post<T>(fullUrl, body, {
      headers: this.httpHeaders,
      params,
    });
  }

  put<T>(
    endpoint: string,
    id: number,
    body: Partial<T>,
    params?: HttpParams
  ): Observable<T> {
    const fullUrl = `${this.config.apiUrl}/${endpoint}/${id}`;
    return this.http.put<T>(fullUrl, body, {
      headers: this.httpHeaders,
      params,
    });
  }

  delete<T>(endpoint: string, id: number, params?: HttpParams): Observable<T> {
    const fullUrl = `${this.config.apiUrl}/${endpoint}/${id}`;
    return this.http.delete<T>(fullUrl, {
      headers: this.httpHeaders,
      params,
    });
  }

  patch<T>(
    endpoint: string,
    id: number,
    body: Partial<T>,
    params?: HttpParams
  ): Observable<T> {
    const fullUrl = `${this.config.apiUrl}/${endpoint}/${id}`;
    return this.http.patch<T>(fullUrl, body, {
      headers: this.httpHeaders,
      params,
    });
  }
}
