import { GeoAdjustModule } from './geo-adjust.module';

describe('GeoAdjustModule', () => {
  let geoAdjustModule: GeoAdjustModule;

  beforeEach(() => {
    geoAdjustModule = new GeoAdjustModule();
  });

  it('should create an instance', () => {
    expect(geoAdjustModule).toBeTruthy();
  });
});
