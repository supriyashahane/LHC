import { NewLimitRoutingModule } from './new-limit-routing.module';

describe('NewLimitRoutingModule', () => {
  let newLimitRoutingModule: NewLimitRoutingModule;

  beforeEach(() => {
    newLimitRoutingModule = new NewLimitRoutingModule();
  });

  it('should create an instance', () => {
    expect(newLimitRoutingModule).toBeTruthy();
  });
});
