import { NewEventRoutingModule } from './new-event-routing.module';

describe('NewEventRoutingModule', () => {
  let newEventRoutingModule: NewEventRoutingModule;

  beforeEach(() => {
    newEventRoutingModule = new NewEventRoutingModule();
  });

  it('should create an instance', () => {
    expect(newEventRoutingModule).toBeTruthy();
  });
});
