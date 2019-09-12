import { NewApiRoutingModule } from './new-api-routing.module';

describe('NewApiRoutingModule', () => {
  let newApiRoutingModule: NewApiRoutingModule;

  beforeEach(() => {
    newApiRoutingModule = new NewApiRoutingModule();
  });

  it('should create an instance', () => {
    expect(newApiRoutingModule).toBeTruthy();
  });
});
