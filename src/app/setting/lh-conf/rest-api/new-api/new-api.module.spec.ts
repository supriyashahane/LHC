import { NewApiModule } from './new-api.module';

describe('NewApiModule', () => {
  let newApiModule: NewApiModule;

  beforeEach(() => {
    newApiModule = new NewApiModule();
  });

  it('should create an instance', () => {
    expect(newApiModule).toBeTruthy();
  });
});
