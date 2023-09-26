import { Component } from '@angular/core';
import { ISurgery } from '../../models/surgery.model';
import { DataService } from '../../services/data.service';
@Component({
  selector: 'app-surgery-list',
  templateUrl: './surgery-list.component.html',
  styleUrls: ['./surgery-list.component.css']
})
export class SurgeryListComponent {

  surgeries: ISurgery[] = [];
  showPopup = false;
  surgery:any;

  constructor(private dataService : DataService) {
    
    this.dataService.getSurgeryData().subscribe((response: ISurgery[]) => {
        this.surgeries = response;
    })
  }
  
  openPopup(surgery: ISurgery): void {
    this.surgery = surgery;
    this.showPopup = true;
  }
  
  onPopupClose(result: any): void {

    this.showPopup = false;
  }
  
  appendToTime(surgeryTime : number):string{
    const time  = surgeryTime.toFixed(2).toString();
    return time.length<5?"0"+time:time  
  }

  formatDate(surgeryDate? : Date):string{
      var sDate = surgeryDate?.toString().split('T')[0]
      return sDate?sDate:""
  }
}
