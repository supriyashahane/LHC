import { NewAnsModule } from './new-ans.module';

describe('NewAnsModule', () => {
  let newAnsModule: NewAnsModule;

  beforeEach(() => {
    newAnsModule = new NewAnsModule();
  });

  it('should create an instance', () => {
    expect(newAnsModule).toBeTruthy();
  });
});
