import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChecksheetComponent } from './view-checksheet.component';

describe('ViewChecksheetComponent', () => {
  let component: ViewChecksheetComponent;
  let fixture: ComponentFixture<ViewChecksheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewChecksheetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewChecksheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
