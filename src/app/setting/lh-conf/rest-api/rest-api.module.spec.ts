import { RestApiModule } from './rest-api.module';

describe('RestApiModule', () => {
  let restApiModule: RestApiModule;

  beforeEach(() => {
    restApiModule = new RestApiModule();
  });

  it('should create an instance', () => {
    expect(restApiModule).toBeTruthy();
  });
});
