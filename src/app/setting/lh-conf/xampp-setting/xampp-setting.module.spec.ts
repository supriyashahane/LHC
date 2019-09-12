import { XamppSettingModule } from './xampp-setting.module';

describe('XamppSettingModule', () => {
  let xamppSettingModule: XamppSettingModule;

  beforeEach(() => {
    xamppSettingModule = new XamppSettingModule();
  });

  it('should create an instance', () => {
    expect(xamppSettingModule).toBeTruthy();
  });
});
