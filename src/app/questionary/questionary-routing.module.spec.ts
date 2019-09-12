import { QuestionaryRoutingModule } from './questionary-routing.module';

describe('QuestionaryRoutingModule', () => {
  let questionaryRoutingModule: QuestionaryRoutingModule;

  beforeEach(() => {
    questionaryRoutingModule = new QuestionaryRoutingModule();
  });

  it('should create an instance', () => {
    expect(questionaryRoutingModule).toBeTruthy();
  });
});
