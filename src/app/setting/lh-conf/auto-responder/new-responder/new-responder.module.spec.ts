import { NewResponderModule } from './new-responder.module';

describe('NewResponderModule', () => {
  let newResponderModule: NewResponderModule;

  beforeEach(() => {
    newResponderModule = new NewResponderModule();
  });

  it('should create an instance', () => {
    expect(newResponderModule).toBeTruthy();
  });
});
