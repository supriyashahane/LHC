import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeZoneSettingComponent } from './time-zone-setting.component';

describe('TimeZoneSettingComponent', () => {
  let component: TimeZoneSettingComponent;
  let fixture: ComponentFixture<TimeZoneSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TimeZoneSettingComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeZoneSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
