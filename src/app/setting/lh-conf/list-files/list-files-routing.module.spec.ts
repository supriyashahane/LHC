import { ListFilesRoutingModule } from './list-files-routing.module';

describe('ListFilesRoutingModule', () => {
  let listFilesRoutingModule: ListFilesRoutingModule;

  beforeEach(() => {
    listFilesRoutingModule = new ListFilesRoutingModule();
  });

  it('should create an instance', () => {
    expect(listFilesRoutingModule).toBeTruthy();
  });
});
