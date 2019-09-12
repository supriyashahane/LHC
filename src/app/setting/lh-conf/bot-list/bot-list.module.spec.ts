import { BotListModule } from './bot-list.module';

describe('BotListModule', () => {
  let botListModule: BotListModule;

  beforeEach(() => {
    botListModule = new BotListModule();
  });

  it('should create an instance', () => {
    expect(botListModule).toBeTruthy();
  });
});
