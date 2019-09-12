import { NotiSettingModule } from './noti-setting.module';

describe('NotiSettingModule', () => {
  let notiSettingModule: NotiSettingModule;

  beforeEach(() => {
    notiSettingModule = new NotiSettingModule();
  });

  it('should create an instance', () => {
    expect(notiSettingModule).toBeTruthy();
  });
});
