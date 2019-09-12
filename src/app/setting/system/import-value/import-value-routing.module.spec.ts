import { ImportValueRoutingModule } from './import-value-routing.module';

describe('ImportValueRoutingModule', () => {
  let importValueRoutingModule: ImportValueRoutingModule;

  beforeEach(() => {
    importValueRoutingModule = new ImportValueRoutingModule();
  });

  it('should create an instance', () => {
    expect(importValueRoutingModule).toBeTruthy();
  });
});
