import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SpeakersService {
  constructor(
    private http: HttpClient
  ) {}

  getSpeakers(): Observable<any> {
    const url = `https://conferenceapi.azurewebsites.net/speakers`;
    return this.http.get<any>(url);
  }

  getSpeakerDetails(id: string): Observable<any> {
    const url = `https://conferenceapi.azurewebsites.net/speakers`;
    return this.http.get<any>(url);
  }
}
