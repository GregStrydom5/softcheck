import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardMonthRowsComponent } from './dashboard-month-rows.component';

describe('DashboardMonthRowsComponent', () => {
  let component: DashboardMonthRowsComponent;
  let fixture: ComponentFixture<DashboardMonthRowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardMonthRowsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardMonthRowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
