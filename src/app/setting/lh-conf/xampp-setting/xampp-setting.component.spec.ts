import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XamppSettingComponent } from './xampp-setting.component';

describe('XamppSettingComponent', () => {
  let component: XamppSettingComponent;
  let fixture: ComponentFixture<XamppSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [XamppSettingComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XamppSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
