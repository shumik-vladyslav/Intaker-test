import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { SpeakersResponse } from 'src/app/shared/models/application.model';

@Injectable({
  providedIn: 'root',
})
export class SpeakersService {
  constructor(
    private http: HttpClient
  ) {}

  getSpeakers(): Observable<SpeakersResponse> {
    const url = `https://conferenceapi.azurewebsites.net/speakers`;
    return this.http.get<SpeakersResponse>(url);
  }

  getSpeakerDetails(id: string): Observable<string> {
    const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
    const url = `https://conferenceapi.azurewebsites.net/speaker/${id}`;
    const requestOptions: Object = {
      headers: headers,
      responseType: 'text'
    }
    return this.http.get<string>(url, requestOptions);
  }
}
