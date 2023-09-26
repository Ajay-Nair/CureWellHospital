import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorsCardComponent } from './doctors-card.component';

describe('DoctorsCardComponent', () => {
  let component: DoctorsCardComponent;
  let fixture: ComponentFixture<DoctorsCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoctorsCardComponent]
    });
    fixture = TestBed.createComponent(DoctorsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
