import { EditGroupRoutingModule } from './edit-group-routing.module';

describe('EditGroupRoutingModule', () => {
  let editGroupRoutingModule: EditGroupRoutingModule;

  beforeEach(() => {
    editGroupRoutingModule = new EditGroupRoutingModule();
  });

  it('should create an instance', () => {
    expect(editGroupRoutingModule).toBeTruthy();
  });
});
