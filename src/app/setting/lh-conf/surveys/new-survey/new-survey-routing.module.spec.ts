import { NewSurveyRoutingModule } from './new-survey-routing.module';

describe('NewSurveyRoutingModule', () => {
  let newSurveyRoutingModule: NewSurveyRoutingModule;

  beforeEach(() => {
    newSurveyRoutingModule = new NewSurveyRoutingModule();
  });

  it('should create an instance', () => {
    expect(newSurveyRoutingModule).toBeTruthy();
  });
});
