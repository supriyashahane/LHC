import { EditRoleRoutingModule } from './edit-role-routing.module';

describe('EditRoleRoutingModule', () => {
  let editRoleRoutingModule: EditRoleRoutingModule;

  beforeEach(() => {
    editRoleRoutingModule = new EditRoleRoutingModule();
  });

  it('should create an instance', () => {
    expect(editRoleRoutingModule).toBeTruthy();
  });
});
