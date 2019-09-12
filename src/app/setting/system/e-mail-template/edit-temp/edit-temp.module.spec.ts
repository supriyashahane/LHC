import { EditTempModule } from './edit-temp.module';

describe('EditTempModule', () => {
  let editTempModule: EditTempModule;

  beforeEach(() => {
    editTempModule = new EditTempModule();
  });

  it('should create an instance', () => {
    expect(editTempModule).toBeTruthy();
  });
});
