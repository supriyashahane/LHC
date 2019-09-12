import { StartChatSettingRoutingModule } from './start-chat-setting-routing.module';

describe('StartChatSettingRoutingModule', () => {
  let startChatSettingRoutingModule: StartChatSettingRoutingModule;

  beforeEach(() => {
    startChatSettingRoutingModule = new StartChatSettingRoutingModule();
  });

  it('should create an instance', () => {
    expect(startChatSettingRoutingModule).toBeTruthy();
  });
});
