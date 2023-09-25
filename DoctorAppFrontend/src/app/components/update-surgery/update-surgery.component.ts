import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

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
  
  constructor(){}

  ngOnInit(): void {
    this.new_startTime = this.surgery_update.startTime;
    this.new_endTime = this.surgery_update.endTime;
  }

  closePopup():void{
    this.close.emit();
  }


  
}
