import { ProActiveChatVarModule } from './pro-active-chat-var.module';

describe('ProActiveChatVarModule', () => {
  let proActiveChatVarModule: ProActiveChatVarModule;

  beforeEach(() => {
    proActiveChatVarModule = new ProActiveChatVarModule();
  });

  it('should create an instance', () => {
    expect(proActiveChatVarModule).toBeTruthy();
  });
});
