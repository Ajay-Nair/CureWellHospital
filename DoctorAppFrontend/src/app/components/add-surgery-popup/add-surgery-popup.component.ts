import { Component, EventEmitter, Output } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { ISurgery } from 'src/app/models/surgery.model';
import { DataService } from 'src/app/services/data.service';

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
  selector: 'app-add-surgery-popup',
  templateUrl: './add-surgery-popup.component.html',
  styleUrls: ['./add-surgery-popup.component.css']
})
export class AddSurgeryPopupComponent {
  @Output() close = new EventEmitter<any>();

  textMessage = ""
  alertClass = ""

  surgery:ISurgery = {
    StartTime:0,
    EndTime:0
  }

constructor(private dataservice : DataService,private fb: FormBuilder)
{
}
addSurgeryForm = this.fb.group({
  id: [null, [Validators.required]],
  stime: [null, [Validators.required]],
  etime: [null, [Validators.required]],
},
{ validators: timeValidator }
);
get stime() {
  return this.addSurgeryForm.get('stime');
}

get etime() {
  return this.addSurgeryForm.get('etime');
}

get id() {
  return this.addSurgeryForm.get('id');
}

get sdate() {
  return this.addSurgeryForm.get('sdate');
}
  closePopup(): void {
    // window.location.reload();
    this.close.emit();
  }

  OnSubmit()
  {
    this.dataservice.postSurgeryData(this.surgery).subscribe(
      (response) => {
        this.textMessage = 'Added record successfully';
        this.alertClass = 'alert alert-success';
        console.log(response);
      },
      (error) => {
        this.textMessage = error.error.Message;
        this.alertClass = 'alert alert-danger';
        console.log(error);
      }
    );
  }
}
