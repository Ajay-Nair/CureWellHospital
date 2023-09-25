import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { UpdateSurgeryService } from 'src/app/services/update-surgery.service';

@Component({
  selector: 'app-update-surgery',
  templateUrl: './update-surgery.component.html',
  styleUrls: ['./update-surgery.component.css']
})
export class UpdateSurgeryComponent implements OnInit {
  @Input() surgery_update:any;
  @Output() close = new EventEmitter<any>();

  new_startTime: any;
  new_endTime: any;
  
  constructor(private UpdateSurgeryService: UpdateSurgeryService){}

  ngOnInit(): void {
    this.new_startTime = this.surgery_update.startTime;
    this.new_endTime = this.surgery_update.endTime;
  }

   OnSubmit()
   {
    this.UpdateSurgeryService.updateSurgery(this.surgery_update.surgeryId,this.new_startTime,this.new_endTime).subscribe(
      (response)=>{
        console.log("Successfull",response);
      },
      (error)=>{
        console.error("Failed",error);
      }
    )
   } 
  closePopup():void{
    this.close.emit();
  }


  
}
