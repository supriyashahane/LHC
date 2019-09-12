import { EmbedCodeModule } from './embed-code.module';

describe('EmbedCodeModule', () => {
  let embedCodeModule: EmbedCodeModule;

  beforeEach(() => {
    embedCodeModule = new EmbedCodeModule();
  });

  it('should create an instance', () => {
    expect(embedCodeModule).toBeTruthy();
  });
});
