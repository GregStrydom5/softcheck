import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionTemplateImmerseComponent } from './section-template-immerse.component';

describe('SectionTemplateImmerseComponent', () => {
  let component: SectionTemplateImmerseComponent;
  let fixture: ComponentFixture<SectionTemplateImmerseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionTemplateImmerseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionTemplateImmerseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
