import { NewProRoutingModule } from './new-pro-routing.module';

describe('NewProRoutingModule', () => {
  let newProRoutingModule: NewProRoutingModule;

  beforeEach(() => {
    newProRoutingModule = new NewProRoutingModule();
  });

  it('should create an instance', () => {
    expect(newProRoutingModule).toBeTruthy();
  });
});
