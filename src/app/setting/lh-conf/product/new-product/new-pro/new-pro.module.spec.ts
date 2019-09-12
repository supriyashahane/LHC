import { NewProModule } from './new-pro.module';

describe('NewProModule', () => {
  let newProModule: NewProModule;

  beforeEach(() => {
    newProModule = new NewProModule();
  });

  it('should create an instance', () => {
    expect(newProModule).toBeTruthy();
  });
});
