import { EMailTemplateRoutingModule } from './e-mail-template-routing.module';

describe('EMailTemplateRoutingModule', () => {
  let eMailTemplateRoutingModule: EMailTemplateRoutingModule;

  beforeEach(() => {
    eMailTemplateRoutingModule = new EMailTemplateRoutingModule();
  });

  it('should create an instance', () => {
    expect(eMailTemplateRoutingModule).toBeTruthy();
  });
});
