import { DialectsModule } from './dialects.module';

describe('DialectsModule', () => {
  let dialectsModule: DialectsModule;

  beforeEach(() => {
    dialectsModule = new DialectsModule();
  });

  it('should create an instance', () => {
    expect(dialectsModule).toBeTruthy();
  });
});
