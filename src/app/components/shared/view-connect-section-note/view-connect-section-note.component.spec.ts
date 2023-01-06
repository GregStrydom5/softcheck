import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewConnectSectionNoteComponent } from './view-connect-section-note.component';

describe('ViewConnectSectionNoteComponent', () => {
  let component: ViewConnectSectionNoteComponent;
  let fixture: ComponentFixture<ViewConnectSectionNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewConnectSectionNoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewConnectSectionNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
