import { ArchivesListRoutingModule } from './archives-list-routing.module';

describe('ArchivesListRoutingModule', () => {
  let archivesListRoutingModule: ArchivesListRoutingModule;

  beforeEach(() => {
    archivesListRoutingModule = new ArchivesListRoutingModule();
  });

  it('should create an instance', () => {
    expect(archivesListRoutingModule).toBeTruthy();
  });
});
