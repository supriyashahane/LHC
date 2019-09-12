import { FilesConfigRoutingModule } from './files-config-routing.module';

describe('FilesConfigRoutingModule', () => {
  let filesConfigRoutingModule: FilesConfigRoutingModule;

  beforeEach(() => {
    filesConfigRoutingModule = new FilesConfigRoutingModule();
  });

  it('should create an instance', () => {
    expect(filesConfigRoutingModule).toBeTruthy();
  });
});
