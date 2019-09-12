import { NewListchatRoutingModule } from './new-listchat-routing.module';

describe('NewListchatRoutingModule', () => {
  let newListchatRoutingModule: NewListchatRoutingModule;

  beforeEach(() => {
    newListchatRoutingModule = new NewListchatRoutingModule();
  });

  it('should create an instance', () => {
    expect(newListchatRoutingModule).toBeTruthy();
  });
});
