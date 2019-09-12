import { NewEventModule } from './new-event.module';

describe('NewEventModule', () => {
  let newEventModule: NewEventModule;

  beforeEach(() => {
    newEventModule = new NewEventModule();
  });

  it('should create an instance', () => {
    expect(newEventModule).toBeTruthy();
  });
});
