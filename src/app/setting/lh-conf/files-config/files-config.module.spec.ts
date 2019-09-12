import { FilesConfigModule } from './files-config.module';

describe('FilesConfigModule', () => {
  let filesConfigModule: FilesConfigModule;

  beforeEach(() => {
    filesConfigModule = new FilesConfigModule();
  });

  it('should create an instance', () => {
    expect(filesConfigModule).toBeTruthy();
  });
});
