import { CannedMessageRoutingModule } from './canned-message-routing.module';

describe('CannedMessageRoutingModule', () => {
  let cannedMessageRoutingModule: CannedMessageRoutingModule;

  beforeEach(() => {
    cannedMessageRoutingModule = new CannedMessageRoutingModule();
  });

  it('should create an instance', () => {
    expect(cannedMessageRoutingModule).toBeTruthy();
  });
});
