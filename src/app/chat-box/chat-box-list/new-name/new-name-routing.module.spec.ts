import { NewNameRoutingModule } from './new-name-routing.module';

describe('NewNameRoutingModule', () => {
  let newNameRoutingModule: NewNameRoutingModule;

  beforeEach(() => {
    newNameRoutingModule = new NewNameRoutingModule();
  });

  it('should create an instance', () => {
    expect(newNameRoutingModule).toBeTruthy();
  });
});
