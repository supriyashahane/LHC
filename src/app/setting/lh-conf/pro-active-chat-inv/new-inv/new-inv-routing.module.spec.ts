import { NewInvRoutingModule } from './new-inv-routing.module';

describe('NewInvRoutingModule', () => {
  let newInvRoutingModule: NewInvRoutingModule;

  beforeEach(() => {
    newInvRoutingModule = new NewInvRoutingModule();
  });

  it('should create an instance', () => {
    expect(newInvRoutingModule).toBeTruthy();
  });
});
