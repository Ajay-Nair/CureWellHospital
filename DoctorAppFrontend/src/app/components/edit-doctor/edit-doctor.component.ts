import { Component, EventEmitter, Output,Input } from '@angular/core';

@Component({
  selector: 'app-edit-doctor',
  templateUrl: './edit-doctor.component.html',
  styleUrls: ['./edit-doctor.component.css']
})
export class EditDoctorComponent {
  @Output() close = new EventEmitter<any>();
  @Input() data :any;


  DoctorName:string = "";


  OnSubmit():void
  {
    this.close.emit();
  }
  closePopup():void{
    this.close.emit();
  }
 

}
