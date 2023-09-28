import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSurgeryPopupComponent } from './add-surgery-popup.component';

describe('AddSurgeryPopupComponent', () => {
  let component: AddSurgeryPopupComponent;
  let fixture: ComponentFixture<AddSurgeryPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddSurgeryPopupComponent]
    });
    fixture = TestBed.createComponent(AddSurgeryPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
