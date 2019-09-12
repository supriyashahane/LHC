import { OfflineSettingRoutingModule } from './offline-setting-routing.module';

describe('OfflineSettingRoutingModule', () => {
  let offlineSettingRoutingModule: OfflineSettingRoutingModule;

  beforeEach(() => {
    offlineSettingRoutingModule = new OfflineSettingRoutingModule();
  });

  it('should create an instance', () => {
    expect(offlineSettingRoutingModule).toBeTruthy();
  });
});
