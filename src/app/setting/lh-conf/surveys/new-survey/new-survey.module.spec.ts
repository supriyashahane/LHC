import { NewSurveyModule } from './new-survey.module';

describe('NewSurveyModule', () => {
  let newSurveyModule: NewSurveyModule;

  beforeEach(() => {
    newSurveyModule = new NewSurveyModule();
  });

  it('should create an instance', () => {
    expect(newSurveyModule).toBeTruthy();
  });
});
