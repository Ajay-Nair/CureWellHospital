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

 

  doctorForm: FormGroup;

 

  DoctorName: string = '';

 

  constructor(private dataservice: DataService, private fb: FormBuilder) {

this.doctorForm = this.fb.group({

      dname: [null, Validators.required], // Add validation for Doctor Name

    });

  }

 

  OnSubmit(): void {

    this.dataservice

      .putDoctorData(this.DoctorName, this.data.DoctorId)

      .subscribe(

        (response: IDoctor) => {

          this.data = response;

          window.location.reload();

        },

        (error: any) => {

          console.log('Update failed : ' + error);

        }

      );

 

    this.close.emit();

  }

  closePopup(): void {

    this.close.emit();

  }
 

}
