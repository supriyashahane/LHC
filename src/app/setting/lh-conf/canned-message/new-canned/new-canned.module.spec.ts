import { NewCannedModule } from './new-canned.module';

describe('NewCannedModule', () => {
  let newCannedModule: NewCannedModule;

  beforeEach(() => {
    newCannedModule = new NewCannedModule();
  });

  it('should create an instance', () => {
    expect(newCannedModule).toBeTruthy();
  });
});
