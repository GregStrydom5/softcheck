import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateChecksheetComponent } from './create-checksheet.component';

describe('CreateChecksheetComponent', () => {
  let component: CreateChecksheetComponent;
  let fixture: ComponentFixture<CreateChecksheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateChecksheetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateChecksheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
