import { RestApiRoutingModule } from './rest-api-routing.module';

describe('RestApiRoutingModule', () => {
  let restApiRoutingModule: RestApiRoutingModule;

  beforeEach(() => {
    restApiRoutingModule = new RestApiRoutingModule();
  });

  it('should create an instance', () => {
    expect(restApiRoutingModule).toBeTruthy();
  });
});
