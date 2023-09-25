import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdateSurgeryService {

  private url = '/assets/test_data.json';
  constructor(private client:HttpClient) { 
  }

  updateSurgery(id:number,startTime:number,endTime:number): Observable<any>{

    const time = {
      starttime:startTime,
      endTime:endTime
    }
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.client.put(this.url,time,{headers});
  }
}
