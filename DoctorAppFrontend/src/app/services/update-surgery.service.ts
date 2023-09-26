import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ISurgery } from '../models/surgery.model';
import { Time } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class UpdateSurgeryService {

  private url = 'http://localhost:57433/api/Home/surgeries';
  constructor(private client:HttpClient) { 
  }

  updateSurgery(id:number,startTime:string,endTime:string): Observable<ISurgery>{

    const st = startTime.split(':')
    const et = endTime.split(':')
    const surgery:ISurgery = {
      SurgeryId:id,
      StartTime:parseFloat(st[0]+"."+st[1]),
      EndTime:parseFloat(et[0]+"."+et[1])
    }
    return this.client.put<ISurgery>(this.url,surgery);
  }
}
