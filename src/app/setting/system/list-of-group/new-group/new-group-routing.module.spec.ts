import { NewGroupRoutingModule } from './new-group-routing.module';

describe('NewGroupRoutingModule', () => {
  let newGroupRoutingModule: NewGroupRoutingModule;

  beforeEach(() => {
    newGroupRoutingModule = new NewGroupRoutingModule();
  });

  it('should create an instance', () => {
    expect(newGroupRoutingModule).toBeTruthy();
  });
});
