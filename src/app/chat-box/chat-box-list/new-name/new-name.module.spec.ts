import { NewNameModule } from './new-name.module';

describe('NewNameModule', () => {
  let newNameModule: NewNameModule;

  beforeEach(() => {
    newNameModule = new NewNameModule();
  });

  it('should create an instance', () => {
    expect(newNameModule).toBeTruthy();
  });
});
