import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionDetailsInfoDialogComponent } from './section-details-info-dialog.component';

describe('SectionDetailsInfoDialogComponent', () => {
  let component: SectionDetailsInfoDialogComponent;
  let fixture: ComponentFixture<SectionDetailsInfoDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionDetailsInfoDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionDetailsInfoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
