import { CleanCacheModule } from './clean-cache.module';

describe('CleanCacheModule', () => {
  let cleanCacheModule: CleanCacheModule;

  beforeEach(() => {
    cleanCacheModule = new CleanCacheModule();
  });

  it('should create an instance', () => {
    expect(cleanCacheModule).toBeTruthy();
  });
});
