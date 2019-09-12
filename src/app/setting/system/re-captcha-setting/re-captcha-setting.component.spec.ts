import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReCaptchaSettingComponent } from './re-captcha-setting.component';

describe('ReCaptchaSettingComponent', () => {
  let component: ReCaptchaSettingComponent;
  let fixture: ComponentFixture<ReCaptchaSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ReCaptchaSettingComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReCaptchaSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
