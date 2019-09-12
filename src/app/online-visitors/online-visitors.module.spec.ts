import { OnlineVisitorsModule } from './online-visitors.module';

describe('OnlineVisitorsModule', () => {
  let onlineVisitorsModule: OnlineVisitorsModule;

  beforeEach(() => {
    onlineVisitorsModule = new OnlineVisitorsModule();
  });

  it('should create an instance', () => {
    expect(onlineVisitorsModule).toBeTruthy();
  });
});
