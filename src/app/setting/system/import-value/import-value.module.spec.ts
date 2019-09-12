import { ImportValueModule } from './import-value.module';

describe('ImportValueModule', () => {
  let importValueModule: ImportValueModule;

  beforeEach(() => {
    importValueModule = new ImportValueModule();
  });

  it('should create an instance', () => {
    expect(importValueModule).toBeTruthy();
  });
});
