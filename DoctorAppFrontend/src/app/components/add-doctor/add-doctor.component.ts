import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { IDoctor } from 'src/app/models/doctor.model';
import { IDrSpecialization } from 'src/app/models/drSpecialization.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.css']
})
export class AddDoctorComponent {
  @Output() close = new EventEmitter<any>();
  DoctorName : string = "";
  Specialization : string = "";
  date = new Date();
  constructor(private DoctorData : DataService){

  }

  OnSubmit()
  {console.log(this.DoctorName,this.Specialization,this.date);
     this.DoctorData.putDoctorData(this.DoctorName,this.Specialization,this.date).subscribe((response)=>{
    console.log(response);
  },
  (error)=>{
    console.error(error);
  }
  )
  } 
 closePopup():void{
   this.close.emit();
 }


}
