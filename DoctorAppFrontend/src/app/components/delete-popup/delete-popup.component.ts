import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-delete-popup',
  templateUrl: './delete-popup.component.html',
  styleUrls: ['./delete-popup.component.css']
})
export class DeletePopupComponent {
  @Output() close = new EventEmitter<any>();

  closePopup(): void {

    window.location.reload();
    this.close.emit();
  }
}
