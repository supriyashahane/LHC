import { BotListRoutingModule } from './bot-list-routing.module';

describe('BotListRoutingModule', () => {
  let botListRoutingModule: BotListRoutingModule;

  beforeEach(() => {
    botListRoutingModule = new BotListRoutingModule();
  });

  it('should create an instance', () => {
    expect(botListRoutingModule).toBeTruthy();
  });
});
