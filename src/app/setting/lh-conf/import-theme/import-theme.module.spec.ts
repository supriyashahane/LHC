import { ImportThemeModule } from './import-theme.module';

describe('ImportThemeModule', () => {
  let importThemeModule: ImportThemeModule;

  beforeEach(() => {
    importThemeModule = new ImportThemeModule();
  });

  it('should create an instance', () => {
    expect(importThemeModule).toBeTruthy();
  });
});
