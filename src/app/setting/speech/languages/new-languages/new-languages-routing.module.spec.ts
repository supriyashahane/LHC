import { NewLanguagesRoutingModule } from './new-languages-routing.module';

describe('NewLanguagesRoutingModule', () => {
  let newLanguagesRoutingModule: NewLanguagesRoutingModule;

  beforeEach(() => {
    newLanguagesRoutingModule = new NewLanguagesRoutingModule();
  });

  it('should create an instance', () => {
    expect(newLanguagesRoutingModule).toBeTruthy();
  });
});
