import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteChecksheetComponent } from './delete-checksheet.component';

describe('DeleteChecksheetComponent', () => {
  let component: DeleteChecksheetComponent;
  let fixture: ComponentFixture<DeleteChecksheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteChecksheetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteChecksheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
