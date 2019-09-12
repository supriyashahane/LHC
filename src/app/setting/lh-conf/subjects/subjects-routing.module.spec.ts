import { SubjectsRoutingModule } from './subjects-routing.module';

describe('SubjectsRoutingModule', () => {
  let subjectsRoutingModule: SubjectsRoutingModule;

  beforeEach(() => {
    subjectsRoutingModule = new SubjectsRoutingModule();
  });

  it('should create an instance', () => {
    expect(subjectsRoutingModule).toBeTruthy();
  });
});
