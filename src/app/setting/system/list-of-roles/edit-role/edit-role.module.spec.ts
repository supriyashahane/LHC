import { EditRoleModule } from './edit-role.module';

describe('EditRoleModule', () => {
  let editRoleModule: EditRoleModule;

  beforeEach(() => {
    editRoleModule = new EditRoleModule();
  });

  it('should create an instance', () => {
    expect(editRoleModule).toBeTruthy();
  });
});
