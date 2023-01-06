import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardChecksheetDetailsComponent } from './dashboard-checksheet-details.component';

describe('DashboardChecksheetDetailsComponent', () => {
  let component: DashboardChecksheetDetailsComponent;
  let fixture: ComponentFixture<DashboardChecksheetDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardChecksheetDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardChecksheetDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
