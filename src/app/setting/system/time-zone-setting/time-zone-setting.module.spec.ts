import { TimeZoneSettingModule } from './time-zone-setting.module';

describe('TimeZoneSettingModule', () => {
  let timeZoneSettingModule: TimeZoneSettingModule;

  beforeEach(() => {
    timeZoneSettingModule = new TimeZoneSettingModule();
  });

  it('should create an instance', () => {
    expect(timeZoneSettingModule).toBeTruthy();
  });
});
