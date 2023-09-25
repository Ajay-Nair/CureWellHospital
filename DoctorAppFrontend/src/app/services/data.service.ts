import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private url = '/assets/doctordata.json';
  constructor(private client: HttpClient) {}

  getDoctorData() {
    return this.client.get(this.url);
  }
}
