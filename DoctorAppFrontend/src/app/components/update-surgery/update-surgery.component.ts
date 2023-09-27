import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { UpdateSurgeryService } from 'src/app/services/update-surgery.service';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  AbstractControl,
} from '@angular/forms';

export function timeValidator(
  control: AbstractControl
): { [key: string]: boolean } | null {

  const stime = control.get('stime')?.value;
  const etime = control.get('etime')?.value;

  if (!stime || !etime) {
    return null;
  }

  const stimeArray = stime.split(':').map(Number);
  const etimeArray = etime.split(':').map(Number);

  if (
    stimeArray[0] > etimeArray[0] ||
    (stimeArray[0] === etimeArray[0] && stimeArray[1] >= etimeArray[1])
  ) {
      return { invalidTime: true };
    }

  return null;

}

@Component({
  selector: 'app-update-surgery',
  templateUrl: './update-surgery.component.html',
  styleUrls: ['./update-surgery.component.css'],
})

export class UpdateSurgeryComponent {
  
  @Input() surgery_update: any;
  @Output() close = new EventEmitter<any>();

  new_startTime: any;

  new_endTime: any;

  constructor(
    private UpdateSurgeryService: UpdateSurgeryService,
    private router: Router,
    private fb: FormBuilder
  ) { }

  updateSurgeryForm = this.fb.group(
    {
      stime: [null, [Validators.required]],
      etime: [null, [Validators.required]],
    },

    { validators: timeValidator }
  );

  get stime() {
    return this.updateSurgeryForm.get('stime');
  }

  get etime() {
    return this.updateSurgeryForm.get('etime');
  }

  OnSubmit() {
    console.log(this.new_startTime, this.new_endTime);
    this.UpdateSurgeryService.updateSurgery(

      this.surgery_update.SurgeryId,
      this.new_startTime,
      this.new_endTime

      ).subscribe(
      (response) => {
        window.location.reload();
        // this.router.navigateByUrl('/viewSchedule')
        console.log('Successfull', response);
      },
      (error) => {
        console.error('Failed', error);
      }
    );
    this.closePopup();

  }

  closePopup(): void {
    this.close.emit();
  }
}