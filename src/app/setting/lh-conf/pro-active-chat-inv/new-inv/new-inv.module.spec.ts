import { NewInvModule } from './new-inv.module';

describe('NewInvModule', () => {
  let newInvModule: NewInvModule;

  beforeEach(() => {
    newInvModule = new NewInvModule();
  });

  it('should create an instance', () => {
    expect(newInvModule).toBeTruthy();
  });
});
