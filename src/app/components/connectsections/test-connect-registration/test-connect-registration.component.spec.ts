import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestConnectRegistrationComponent } from './test-connect-registration.component';

describe('TestConnectRegistrationComponent', () => {
  let component: TestConnectRegistrationComponent;
  let fixture: ComponentFixture<TestConnectRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestConnectRegistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestConnectRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
