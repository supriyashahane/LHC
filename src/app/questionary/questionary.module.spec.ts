import { QuestionaryModule } from './questionary.module';

describe('QuestionaryModule', () => {
  let questionaryModule: QuestionaryModule;

  beforeEach(() => {
    questionaryModule = new QuestionaryModule();
  });

  it('should create an instance', () => {
    expect(questionaryModule).toBeTruthy();
  });
});
