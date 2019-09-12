import { ImportThemeRoutingModule } from './import-theme-routing.module';

describe('ImportThemeRoutingModule', () => {
  let importThemeRoutingModule: ImportThemeRoutingModule;

  beforeEach(() => {
    importThemeRoutingModule = new ImportThemeRoutingModule();
  });

  it('should create an instance', () => {
    expect(importThemeRoutingModule).toBeTruthy();
  });
});
