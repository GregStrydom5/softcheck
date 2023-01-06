import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestImmerseLauncherComponent } from './test-immerse-launcher.component';

describe('TestImmerseLauncherComponent', () => {
  let component: TestImmerseLauncherComponent;
  let fixture: ComponentFixture<TestImmerseLauncherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestImmerseLauncherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestImmerseLauncherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
