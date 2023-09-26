import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

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
}
