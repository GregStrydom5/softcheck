import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSectionNoteComponent } from './add-section-note.component';

describe('AddConnectSectionNoteComponent', () => {
  let component: AddSectionNoteComponent;
  let fixture: ComponentFixture<AddSectionNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSectionNoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSectionNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
