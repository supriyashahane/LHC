import { NewDialectsRoutingModule } from './new-dialects-routing.module';

describe('NewDialectsRoutingModule', () => {
  let newDialectsRoutingModule: NewDialectsRoutingModule;

  beforeEach(() => {
    newDialectsRoutingModule = new NewDialectsRoutingModule();
  });

  it('should create an instance', () => {
    expect(newDialectsRoutingModule).toBeTruthy();
  });
});
