import { ListFilesModule } from './list-files.module';

describe('ListFilesModule', () => {
  let listFilesModule: ListFilesModule;

  beforeEach(() => {
    listFilesModule = new ListFilesModule();
  });

  it('should create an instance', () => {
    expect(listFilesModule).toBeTruthy();
  });
});
