import { ProActiveChatComponentModule } from './pro-active-chat-component.module';

describe('ProActiveChatComponentModule', () => {
  let proActiveChatComponentModule: ProActiveChatComponentModule;

  beforeEach(() => {
    proActiveChatComponentModule = new ProActiveChatComponentModule();
  });

  it('should create an instance', () => {
    expect(proActiveChatComponentModule).toBeTruthy();
  });
});
