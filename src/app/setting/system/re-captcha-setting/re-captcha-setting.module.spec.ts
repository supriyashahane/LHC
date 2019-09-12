import { ReCaptchaSettingModule } from './re-captcha-setting.module';

describe('ReCaptchaSettingModule', () => {
  let reCaptchaSettingModule: ReCaptchaSettingModule;

  beforeEach(() => {
    reCaptchaSettingModule = new ReCaptchaSettingModule();
  });

  it('should create an instance', () => {
    expect(reCaptchaSettingModule).toBeTruthy();
  });
});
