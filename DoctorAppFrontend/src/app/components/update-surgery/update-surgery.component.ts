import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { UpdateSurgeryService } from 'src/app/services/update-surgery.service';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  AbstractControl,
} from '@angular/forms';

@Component({
  selector: 'app-update-surgery',
  templateUrl: './update-surgery.component.html',
  styleUrls: ['./update-surgery.component.css']
})
export class UpdateSurgeryComponent  {
  @Input() surgery_update:any;
  @Output() close = new EventEmitter<any>();

  new_startTime: any;
  new_endTime: any;
  
  constructor(private UpdateSurgeryService: UpdateSurgeryService,private router : Router, private fb: FormBuilder){}

  updateSurgeryForm = this.fb.group({
    stime: [null, [Validators.required]],
    etime: [null, [Validators.required]]
  });

  get stime() {
    return this.updateSurgeryForm.get('stime');
  }

  get etime() {
    return this.updateSurgeryForm.get('etime');
  }
   OnSubmit()
   {
    console.log(this.new_startTime,this.new_endTime)
    this.UpdateSurgeryService.updateSurgery(this.surgery_update.SurgeryId,this.new_startTime,this.new_endTime).subscribe(
      (response)=>{
        window.location.reload();
        // this.router.navigateByUrl('/viewSchedule')
        console.log("Successfull",response);
      },
      (error)=>{
        console.error("Failed",error);
      }
    )
    this.closePopup();
   } 
  closePopup():void{
    this.close.emit();
  }


  
}
