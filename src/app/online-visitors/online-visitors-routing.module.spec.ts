import { OnlineVisitorsRoutingModule } from './online-visitors-routing.module';

describe('OnlineVisitorsRoutingModule', () => {
  let onlineVisitorsRoutingModule: OnlineVisitorsRoutingModule;

  beforeEach(() => {
    onlineVisitorsRoutingModule = new OnlineVisitorsRoutingModule();
  });

  it('should create an instance', () => {
    expect(onlineVisitorsRoutingModule).toBeTruthy();
  });
});
