import { NewCannedRoutingModule } from './new-canned-routing.module';

describe('NewCannedRoutingModule', () => {
  let newCannedRoutingModule: NewCannedRoutingModule;

  beforeEach(() => {
    newCannedRoutingModule = new NewCannedRoutingModule();
  });

  it('should create an instance', () => {
    expect(newCannedRoutingModule).toBeTruthy();
  });
});
