import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfflineSettingComponent } from './offline-setting.component';

describe('OfflineSettingComponent', () => {
  let component: OfflineSettingComponent;
  let fixture: ComponentFixture<OfflineSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OfflineSettingComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfflineSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
