import { NewBotModule } from './new-bot.module';

describe('NewBotModule', () => {
  let newBotModule: NewBotModule;

  beforeEach(() => {
    newBotModule = new NewBotModule();
  });

  it('should create an instance', () => {
    expect(newBotModule).toBeTruthy();
  });
});
