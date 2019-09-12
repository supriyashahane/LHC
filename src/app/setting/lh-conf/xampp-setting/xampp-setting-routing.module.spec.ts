import { XamppSettingRoutingModule } from './xampp-setting-routing.module';

describe('XamppSettingRoutingModule', () => {
  let xamppSettingRoutingModule: XamppSettingRoutingModule;

  beforeEach(() => {
    xamppSettingRoutingModule = new XamppSettingRoutingModule();
  });

  it('should create an instance', () => {
    expect(xamppSettingRoutingModule).toBeTruthy();
  });
});
