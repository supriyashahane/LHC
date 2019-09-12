import { EditGroupModule } from './edit-group.module';

describe('EditGroupModule', () => {
  let editGroupModule: EditGroupModule;

  beforeEach(() => {
    editGroupModule = new EditGroupModule();
  });

  it('should create an instance', () => {
    expect(editGroupModule).toBeTruthy();
  });
});
