import { UpdateInfoModule } from './update-info.module';

describe('UpdateInfoModule', () => {
  let updateInfoModule: UpdateInfoModule;

  beforeEach(() => {
    updateInfoModule = new UpdateInfoModule();
  });

  it('should create an instance', () => {
    expect(updateInfoModule).toBeTruthy();
  });
});
