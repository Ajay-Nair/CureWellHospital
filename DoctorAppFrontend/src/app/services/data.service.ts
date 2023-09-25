import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IDoctor } from 'src/app/models/doctor.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private url = '/assets/doctordata.json';
  constructor(private client: HttpClient) {}

  getDoctorData(): Observable<IDoctor[]> {
    return this.client.get<IDoctor[]>(this.url);
  }
}
