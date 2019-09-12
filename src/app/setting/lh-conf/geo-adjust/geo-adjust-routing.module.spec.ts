import { GeoAdjustRoutingModule } from './geo-adjust-routing.module';

describe('GeoAdjustRoutingModule', () => {
  let geoAdjustRoutingModule: GeoAdjustRoutingModule;

  beforeEach(() => {
    geoAdjustRoutingModule = new GeoAdjustRoutingModule();
  });

  it('should create an instance', () => {
    expect(geoAdjustRoutingModule).toBeTruthy();
  });
});
