import { MailSettingRoutingModule } from './mail-setting-routing.module';

describe('MailSettingRoutingModule', () => {
  let mailSettingRoutingModule: MailSettingRoutingModule;

  beforeEach(() => {
    mailSettingRoutingModule = new MailSettingRoutingModule();
  });

  it('should create an instance', () => {
    expect(mailSettingRoutingModule).toBeTruthy();
  });
});
