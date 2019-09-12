import { NewBotRoutingModule } from './new-bot-routing.module';

describe('NewBotRoutingModule', () => {
  let newBotRoutingModule: NewBotRoutingModule;

  beforeEach(() => {
    newBotRoutingModule = new NewBotRoutingModule();
  });

  it('should create an instance', () => {
    expect(newBotRoutingModule).toBeTruthy();
  });
});
