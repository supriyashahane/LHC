import { VisitorsListRoutingModule } from './visitors-list-routing.module';

describe('VisitorsListRoutingModule', () => {
  let visitorsListRoutingModule: VisitorsListRoutingModule;

  beforeEach(() => {
    visitorsListRoutingModule = new VisitorsListRoutingModule();
  });

  it('should create an instance', () => {
    expect(visitorsListRoutingModule).toBeTruthy();
  });
});
