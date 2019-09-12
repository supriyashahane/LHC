import { EMailTemplateModule } from './e-mail-template.module';

describe('EMailTemplateModule', () => {
  let eMailTemplateModule: EMailTemplateModule;

  beforeEach(() => {
    eMailTemplateModule = new EMailTemplateModule();
  });

  it('should create an instance', () => {
    expect(eMailTemplateModule).toBeTruthy();
  });
});
