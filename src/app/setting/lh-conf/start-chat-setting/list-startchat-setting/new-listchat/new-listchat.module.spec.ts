import { NewListchatModule } from './new-listchat.module';

describe('NewListchatModule', () => {
  let newListchatModule: NewListchatModule;

  beforeEach(() => {
    newListchatModule = new NewListchatModule();
  });

  it('should create an instance', () => {
    expect(newListchatModule).toBeTruthy();
  });
});
