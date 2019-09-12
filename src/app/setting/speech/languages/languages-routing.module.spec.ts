import { LanguagesRoutingModule } from './languages-routing.module';

describe('LanguagesRoutingModule', () => {
  let languagesRoutingModule: LanguagesRoutingModule;

  beforeEach(() => {
    languagesRoutingModule = new LanguagesRoutingModule();
  });

  it('should create an instance', () => {
    expect(languagesRoutingModule).toBeTruthy();
  });
});
