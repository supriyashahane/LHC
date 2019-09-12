import { GeoDetectionModule } from './geo-detection.module';

describe('GeoDetectionModule', () => {
  let geoDetectionModule: GeoDetectionModule;

  beforeEach(() => {
    geoDetectionModule = new GeoDetectionModule();
  });

  it('should create an instance', () => {
    expect(geoDetectionModule).toBeTruthy();
  });
});
