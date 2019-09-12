import { NewLanguagesModule } from './new-languages.module';

describe('NewLanguagesModule', () => {
  let newLanguagesModule: NewLanguagesModule;

  beforeEach(() => {
    newLanguagesModule = new NewLanguagesModule();
  });

  it('should create an instance', () => {
    expect(newLanguagesModule).toBeTruthy();
  });
});
