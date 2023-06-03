import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkExpoComponent } from './work-expo.component';

describe('WorkExpoComponent', () => {
  let component: WorkExpoComponent;
  let fixture: ComponentFixture<WorkExpoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkExpoComponent]
    });
    fixture = TestBed.createComponent(WorkExpoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
