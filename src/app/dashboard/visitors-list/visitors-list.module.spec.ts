import { VisitorsListModule } from './visitors-list.module';

describe('VisitorsListModule', () => {
  let visitorsListModule: VisitorsListModule;

  beforeEach(() => {
    visitorsListModule = new VisitorsListModule();
  });

  it('should create an instance', () => {
    expect(visitorsListModule).toBeTruthy();
  });
});
