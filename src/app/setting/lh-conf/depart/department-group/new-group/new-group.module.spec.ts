import { NewGroupModule } from './new-group.module';

describe('NewGroupModule', () => {
  let newGroupModule: NewGroupModule;

  beforeEach(() => {
    newGroupModule = new NewGroupModule();
  });

  it('should create an instance', () => {
    expect(newGroupModule).toBeTruthy();
  });
});
