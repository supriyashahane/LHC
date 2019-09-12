import { SettingRoutingModule } from './setting-routing.module';

describe('SettingRoutingModule', () => {
  let settingRoutingModule: SettingRoutingModule;

  beforeEach(() => {
    settingRoutingModule = new SettingRoutingModule();
  });

  it('should create an instance', () => {
    expect(settingRoutingModule).toBeTruthy();
  });
});
