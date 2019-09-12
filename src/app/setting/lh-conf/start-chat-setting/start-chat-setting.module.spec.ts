import { StartChatSettingModule } from './start-chat-setting.module';

describe('StartChatSettingModule', () => {
  let startChatSettingModule: StartChatSettingModule;

  beforeEach(() => {
    startChatSettingModule = new StartChatSettingModule();
  });

  it('should create an instance', () => {
    expect(startChatSettingModule).toBeTruthy();
  });
});
