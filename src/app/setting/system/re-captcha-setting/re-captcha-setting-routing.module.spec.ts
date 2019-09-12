import { ReCaptchaSettingRoutingModule } from './re-captcha-setting-routing.module';

describe('ReCaptchaSettingRoutingModule', () => {
  let reCaptchaSettingRoutingModule: ReCaptchaSettingRoutingModule;

  beforeEach(() => {
    reCaptchaSettingRoutingModule = new ReCaptchaSettingRoutingModule();
  });

  it('should create an instance', () => {
    expect(reCaptchaSettingRoutingModule).toBeTruthy();
  });
});
