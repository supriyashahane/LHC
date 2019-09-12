import { CleanCacheRoutingModule } from './clean-cache-routing.module';

describe('CleanCacheRoutingModule', () => {
  let cleanCacheRoutingModule: CleanCacheRoutingModule;

  beforeEach(() => {
    cleanCacheRoutingModule = new CleanCacheRoutingModule();
  });

  it('should create an instance', () => {
    expect(cleanCacheRoutingModule).toBeTruthy();
  });
});
