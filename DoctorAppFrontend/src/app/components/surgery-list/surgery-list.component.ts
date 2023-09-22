import { Component } from '@angular/core';
import { ISurgery } from 'src/app/models/surgery.model';

@Component({
  selector: 'app-surgery-list',
  templateUrl: './surgery-list.component.html',
  styleUrls: ['./surgery-list.component.css']
})
export class SurgeryListComponent {

  surgeries: ISurgery[] = [{ surgeryId: 5001,
                             doctorId: 1001, 
                             surgeryDate: new Date(), 
                             startTime: 12.00,
                              endTime: 1.00, 
                              surgeryCategory: 'ANE' }];

  constructor() {
  
  }

}
