import { Component } from '@angular/core';
import { ISurgery } from '../../models/surgery.model';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-surgery-list',
  templateUrl: './surgery-list.component.html',
  styleUrls: ['./surgery-list.component.css']
})
export class SurgeryListComponent {

  surgeries: ISurgery[] = [];
  
  constructor(private dataService : DataService) {
    
    this.dataService.getSurgeryData().subscribe((response: ISurgery[]) => {
        this.surgeries = response;
    })
  }


}
