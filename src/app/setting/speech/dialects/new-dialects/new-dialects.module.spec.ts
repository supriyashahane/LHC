import { NewDialectsModule } from './new-dialects.module';

describe('NewDialectsModule', () => {
  let newDialectsModule: NewDialectsModule;

  beforeEach(() => {
    newDialectsModule = new NewDialectsModule();
  });

  it('should create an instance', () => {
    expect(newDialectsModule).toBeTruthy();
  });
});
