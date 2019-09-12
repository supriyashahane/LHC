import { NewVarRoutingModule } from './new-var-routing.module';

describe('NewVarRoutingModule', () => {
  let newVarRoutingModule: NewVarRoutingModule;

  beforeEach(() => {
    newVarRoutingModule = new NewVarRoutingModule();
  });

  it('should create an instance', () => {
    expect(newVarRoutingModule).toBeTruthy();
  });
});
