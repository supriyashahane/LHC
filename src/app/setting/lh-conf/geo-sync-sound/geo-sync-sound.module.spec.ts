import { GeoSyncSoundModule } from './geo-sync-sound.module';

describe('GeoSyncSoundModule', () => {
  let geoSyncSoundModule: GeoSyncSoundModule;

  beforeEach(() => {
    geoSyncSoundModule = new GeoSyncSoundModule();
  });

  it('should create an instance', () => {
    expect(geoSyncSoundModule).toBeTruthy();
  });
});
