import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionRowsComponent } from './section-rows.component';

describe('SectionRowsComponent', () => {
  let component: SectionRowsComponent;
  let fixture: ComponentFixture<SectionRowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionRowsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionRowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
