import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditChecksheetComponent } from './edit-checksheet.component';

describe('EditChecksheetComponent', () => {
  let component: EditChecksheetComponent;
  let fixture: ComponentFixture<EditChecksheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditChecksheetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditChecksheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
