import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IDoctor } from 'src/app/models/doctor.model';
import { ISurgery } from '../models/surgery.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private url = 'http://localhost:5232/api/Home/doctors';
  constructor(private client: HttpClient) {}

  getDoctorData(): Observable<IDoctor[]> {
    return this.client.get<IDoctor[]>(this.url);
  }

  getSurgeryData():Observable<ISurgery[]>{
    return this.client.get<ISurgery[]>(this.url+'surgeries');
  }
}
