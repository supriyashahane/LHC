import { NewLimitModule } from './new-limit.module';

describe('NewLimitModule', () => {
  let newLimitModule: NewLimitModule;

  beforeEach(() => {
    newLimitModule = new NewLimitModule();
  });

  it('should create an instance', () => {
    expect(newLimitModule).toBeTruthy();
  });
});
