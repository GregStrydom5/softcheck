import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionButtonsComponent } from './section-buttons.component';

describe('SectionButtonsComponent', () => {
  let component: SectionButtonsComponent;
  let fixture: ComponentFixture<SectionButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionButtonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
