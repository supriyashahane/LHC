import { EditTempRoutingModule } from './edit-temp-routing.module';

describe('EditTempRoutingModule', () => {
  let editTempRoutingModule: EditTempRoutingModule;

  beforeEach(() => {
    editTempRoutingModule = new EditTempRoutingModule();
  });

  it('should create an instance', () => {
    expect(editTempRoutingModule).toBeTruthy();
  });
});
