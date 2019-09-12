import { MailSettingModule } from './mail-setting.module';

describe('MailSettingModule', () => {
  let mailSettingModule: MailSettingModule;

  beforeEach(() => {
    mailSettingModule = new MailSettingModule();
  });

  it('should create an instance', () => {
    expect(mailSettingModule).toBeTruthy();
  });
});
