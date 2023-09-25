import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.css']
})
export class AddDoctorComponent {
  @Output() close = new EventEmitter<any>();
  constructor(){

  }
  OnSubmit()
  {
  } 
 closePopup():void{
   this.close.emit();
 }


}
