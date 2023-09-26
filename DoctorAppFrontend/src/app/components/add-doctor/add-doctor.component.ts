import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { IDoctor } from 'src/app/models/doctor.model';
import { IDrSpecialization } from 'src/app/models/drSpecialization.model';
import { DataService } from 'src/app/services/data.service';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  AbstractControl,
} from '@angular/forms';

// Custom validator function for date control
const dateValidator = (
  control: AbstractControl
): { [key: string]: boolean } | null => {
  if (control.value && control.touched) {
    // custom date validation logic
    const selectedDate = new Date(control.value);
    const currentDate = new Date();

    if (selectedDate > currentDate) {
      return { pastDate: true }; // Date is in the past
    }
  }
  return null; // Date is valid
};

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.css'],
})
export class AddDoctorComponent {
  @Output() close = new EventEmitter<any>();
  DoctorName: string = '';
  Specialization: string = '';
  date: any;

  textMessage = '';
  alertClass = '';

  constructor(private DoctorData: DataService, private fb: FormBuilder) {}
  addDoctorForm = this.fb.group({
    dname: [null, [Validators.required]],
    dspecialization: [null, [Validators.required]],
    sdate: [null, [Validators.required, dateValidator]],
  });

  get dname() {
    return this.addDoctorForm.get('dname');
  }
  get dspecialization() {
    return this.addDoctorForm.get('dspecialization');
  }
  get sdate() {
    return this.addDoctorForm.get('sdate');
  }

  OnSubmit() {
    console.log(this.DoctorName, this.Specialization, this.date);
    this.DoctorData.putDoctorData(
      this.DoctorName,
      this.Specialization,
      this.date
    ).subscribe(
      (response) => {
        this.textMessage = 'Added record successfully';
        this.alertClass = 'alert alert-success';
        console.log(response);
      },
      (error) => {
        this.textMessage = error.message;
        this.alertClass = 'alert alert-danger';
      }
    );
  }
  closePopup(): void {
    this.close.emit();
  }
}
