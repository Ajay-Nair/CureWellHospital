import { Component, EventEmitter, Output, Input } from '@angular/core';

import { IDoctor } from 'src/app/models/doctor.model';

import { DataService } from 'src/app/services/data.service';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-doctor',
  templateUrl: './edit-doctor.component.html',
  styleUrls: ['./edit-doctor.component.css']
})
export class EditDoctorComponent {
  @Output() close = new EventEmitter<any>();
  @Input() data: any;

 alertClass = ''
 textMessage = ''

  doctorForm: FormGroup;
  DoctorName: string = '';

 

  constructor(private dataservice: DataService, private fb: FormBuilder) 
  {
    this.doctorForm = this.fb.group({dname: [null, Validators.required],}); // Add validation for Doctor Name
  }

 

  OnSubmit(): void {

    this.dataservice.putDoctorData(this.DoctorName, this.data.DoctorId).subscribe((response: IDoctor) => {
        this.data = response;
        this.textMessage = 'Edited record successfully';
        this.alertClass = 'alert alert-success';  
        },
        (error: any) => {
        this.textMessage = error.message;
        this.alertClass = 'alert alert-danger';
        }
      );
    
  }

  closePopup(): void {

    window.location.reload();
    this.close.emit();
    

  }
 

}
