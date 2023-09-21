import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSpecializationsComponent } from './view-specializations.component';

describe('ViewSpecializationsComponent', () => {
  let component: ViewSpecializationsComponent;
  let fixture: ComponentFixture<ViewSpecializationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewSpecializationsComponent]
    });
    fixture = TestBed.createComponent(ViewSpecializationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
