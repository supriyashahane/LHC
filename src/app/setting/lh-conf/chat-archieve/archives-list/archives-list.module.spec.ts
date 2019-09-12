import { ArchivesListModule } from './archives-list.module';

describe('ArchivesListModule', () => {
  let archivesListModule: ArchivesListModule;

  beforeEach(() => {
    archivesListModule = new ArchivesListModule();
  });

  it('should create an instance', () => {
    expect(archivesListModule).toBeTruthy();
  });
});
