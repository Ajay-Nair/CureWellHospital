import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ISpecialization } from '../models/specialization.model';

@Injectable({
  providedIn: 'root'
})
export class SpecializationService {
  private url = 'http://localhost:57433/api/Home/specializations';
  constructor(private client:HttpClient) { 
  }

  getSpecialization(){
    return this.client.get(this.url);
  }
  getsp(){
    return this.client.get<ISpecialization[]>(this.url);
  }
}
