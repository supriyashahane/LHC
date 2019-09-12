import { OfflineSettingModule } from './offline-setting.module';

describe('OfflineSettingModule', () => {
  let offlineSettingModule: OfflineSettingModule;

  beforeEach(() => {
    offlineSettingModule = new OfflineSettingModule();
  });

  it('should create an instance', () => {
    expect(offlineSettingModule).toBeTruthy();
  });
});
