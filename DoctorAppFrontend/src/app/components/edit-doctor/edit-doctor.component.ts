import { Component, EventEmitter, Output,Input } from '@angular/core';
import { IDoctor } from 'src/app/models/doctor.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-edit-doctor',
  templateUrl: './edit-doctor.component.html',
  styleUrls: ['./edit-doctor.component.css']
})
export class EditDoctorComponent {
  @Output() close = new EventEmitter<any>();
  @Input() data :any;
  
  DoctorName:string = "";

  constructor(private dataservice : DataService){}

  @Output() newItemEvent = new EventEmitter<string>();
  addNewItem(value: any) {
    this.newItemEvent.emit(value);
  }

  OnSubmit():void
  {
    this.dataservice.putDoctorData(this.DoctorName,this.data.DoctorId).subscribe(
      (response:IDoctor) =>{
        this.data = response;
        console.log(response.toString());
        window.location.reload();
      },
    (error:any) => {
      console.log("Update failed : "+error)
    });
    
    this.close.emit();
  }
  closePopup():void{
    this.close.emit();
  }
 

}
