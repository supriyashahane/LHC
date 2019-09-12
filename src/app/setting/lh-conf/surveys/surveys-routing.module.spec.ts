import { SurveysRoutingModule } from './surveys-routing.module';

describe('SurveysRoutingModule', () => {
  let surveysRoutingModule: SurveysRoutingModule;

  beforeEach(() => {
    surveysRoutingModule = new SurveysRoutingModule();
  });

  it('should create an instance', () => {
    expect(surveysRoutingModule).toBeTruthy();
  });
});
