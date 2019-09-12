import { NewAnsRoutingModule } from './new-ans-routing.module';

describe('NewAnsRoutingModule', () => {
  let newAnsRoutingModule: NewAnsRoutingModule;

  beforeEach(() => {
    newAnsRoutingModule = new NewAnsRoutingModule();
  });

  it('should create an instance', () => {
    expect(newAnsRoutingModule).toBeTruthy();
  });
});
