import { GeoDetectionRoutingModule } from './geo-detection-routing.module';

describe('GeoDetectionRoutingModule', () => {
  let geoDetectionRoutingModule: GeoDetectionRoutingModule;

  beforeEach(() => {
    geoDetectionRoutingModule = new GeoDetectionRoutingModule();
  });

  it('should create an instance', () => {
    expect(geoDetectionRoutingModule).toBeTruthy();
  });
});
