import { NewSubjectRoutingModule } from './new-subject-routing.module';

describe('NewSubjectRoutingModule', () => {
  let newSubjectRoutingModule: NewSubjectRoutingModule;

  beforeEach(() => {
    newSubjectRoutingModule = new NewSubjectRoutingModule();
  });

  it('should create an instance', () => {
    expect(newSubjectRoutingModule).toBeTruthy();
  });
});
