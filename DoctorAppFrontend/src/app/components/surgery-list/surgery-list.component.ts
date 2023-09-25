import { Component } from '@angular/core';
import { ISurgery } from 'src/app/models/surgery.model';

@Component({
  selector: 'app-surgery-list',
  templateUrl: './surgery-list.component.html',
  styleUrls: ['./surgery-list.component.css']
})
export class SurgeryListComponent {
  constructor() {
  
  }
  showPopup = false;
  surgery:any;
  openPopup(surgery: any): void {
    this.surgery = surgery;
    this.showPopup = true;
  }
  
  onPopupClose(result: any): void {

    this.showPopup = false;
  }
  surgeries: ISurgery[] = [{ surgeryId: 5001,
                             doctorId: 1001, 
                             surgeryDate: new Date(), 
                             startTime: 12.00,
                              endTime: 1.00, 
                              surgeryCategory: 'ANE' },
                              {
                                surgeryId: 5002,
                                doctorId: 1002, 
                                surgeryDate: new Date(), 
                                startTime: 12.00,
                                 endTime: 1.00, 
                                 surgeryCategory: 'ANE'
                              }];



}
