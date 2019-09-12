import { CannedMessageModule } from './canned-message.module';

describe('CannedMessageModule', () => {
  let cannedMessageModule: CannedMessageModule;

  beforeEach(() => {
    cannedMessageModule = new CannedMessageModule();
  });

  it('should create an instance', () => {
    expect(cannedMessageModule).toBeTruthy();
  });
});
