import { TimeZoneSettingRoutingModule } from './time-zone-setting-routing.module';

describe('TimeZoneSettingRoutingModule', () => {
  let timeZoneSettingRoutingModule: TimeZoneSettingRoutingModule;

  beforeEach(() => {
    timeZoneSettingRoutingModule = new TimeZoneSettingRoutingModule();
  });

  it('should create an instance', () => {
    expect(timeZoneSettingRoutingModule).toBeTruthy();
  });
});
