import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpecializationService {
  private url = '/assets/specializationdata.json';
  constructor(private client:HttpClient) { 
  }

  getSpecialization(){
    return this.client.get(this.url);
  }
}
