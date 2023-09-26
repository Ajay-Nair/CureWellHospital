import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IDoctor } from 'src/app/models/doctor.model';
import { ISurgery } from '../models/surgery.model';
import { IDrSpecialization } from '../models/drSpecialization.model';
import { SpecializationListComponent } from '../components/specialization-list/specialization-list.component';



@Injectable({
  providedIn: 'root',
})
export class DataService {
  private url = 'http://localhost:57433/api/Home/';
  constructor(private client: HttpClient) {}

  getDoctorData(): Observable<IDrSpecialization[]> {

    return this.client.get<IDrSpecialization[]>(this.url+'doctors');
    
  }
  getSpecializedDoctorData(code:string):Observable<IDrSpecialization[]>
  {
    return this.client.get<IDrSpecialization[]>(this.url+'specializations/'+code+'/doctors')
  }

  getSurgeryData():Observable<ISurgery[]>{
    return this.client.get<ISurgery[]>(this.url+'surgeries');
  }

  postDoctorData(name:string,code:string,sdate:Date):Observable<IDrSpecialization>{

    const data:IDrSpecialization = {
      DoctorName:name,
      DoctorId:0,
      SpecializationCode:code,
       SpecializationName:'',
      SpecializationDate:sdate
    }
    return this.client.post<IDrSpecialization>(this.url+'doctors',data)
  }
  putDoctorData(name:string,id:number):Observable<IDoctor>{
    const data : IDoctor = {
      DoctorName:name,
      doctorId: id
    }
    return this.client.put<any>(this.url+"doctors",data);
  }

}
