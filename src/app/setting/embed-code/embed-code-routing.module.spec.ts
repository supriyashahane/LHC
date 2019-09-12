import { EmbedCodeRoutingModule } from './embed-code-routing.module';

describe('EmbedCodeRoutingModule', () => {
  let embedCodeRoutingModule: EmbedCodeRoutingModule;

  beforeEach(() => {
    embedCodeRoutingModule = new EmbedCodeRoutingModule();
  });

  it('should create an instance', () => {
    expect(embedCodeRoutingModule).toBeTruthy();
  });
});
