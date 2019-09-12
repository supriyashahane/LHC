import { NewSubjectModule } from './new-subject.module';

describe('NewSubjectModule', () => {
  let newSubjectModule: NewSubjectModule;

  beforeEach(() => {
    newSubjectModule = new NewSubjectModule();
  });

  it('should create an instance', () => {
    expect(newSubjectModule).toBeTruthy();
  });
});
