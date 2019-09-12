import { NewArchiveModule } from './new-archive.module';

describe('NewArchiveModule', () => {
  let newArchiveModule: NewArchiveModule;

  beforeEach(() => {
    newArchiveModule = new NewArchiveModule();
  });

  it('should create an instance', () => {
    expect(newArchiveModule).toBeTruthy();
  });
});
