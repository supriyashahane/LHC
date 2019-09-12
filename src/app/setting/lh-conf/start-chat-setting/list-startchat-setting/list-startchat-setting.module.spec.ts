import { ListStartchatSettingModule } from './list-startchat-setting.module';

describe('ListStartchatSettingModule', () => {
  let listStartchatSettingModule: ListStartchatSettingModule;

  beforeEach(() => {
    listStartchatSettingModule = new ListStartchatSettingModule();
  });

  it('should create an instance', () => {
    expect(listStartchatSettingModule).toBeTruthy();
  });
});
