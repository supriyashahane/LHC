import { NewResponderRoutingModule } from './new-responder-routing.module';

describe('NewResponderRoutingModule', () => {
  let newResponderRoutingModule: NewResponderRoutingModule;

  beforeEach(() => {
    newResponderRoutingModule = new NewResponderRoutingModule();
  });

  it('should create an instance', () => {
    expect(newResponderRoutingModule).toBeTruthy();
  });
});
