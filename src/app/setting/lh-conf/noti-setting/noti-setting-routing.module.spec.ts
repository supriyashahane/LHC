import { NotiSettingRoutingModule } from './noti-setting-routing.module';

describe('NotiSettingRoutingModule', () => {
  let notiSettingRoutingModule: NotiSettingRoutingModule;

  beforeEach(() => {
    notiSettingRoutingModule = new NotiSettingRoutingModule();
  });

  it('should create an instance', () => {
    expect(notiSettingRoutingModule).toBeTruthy();
  });
});
