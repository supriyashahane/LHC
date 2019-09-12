import { GeoGefetConfigModule } from './geo-gefet-config.module';

describe('GeoGefetConfigModule', () => {
  let geoGefetConfigModule: GeoGefetConfigModule;

  beforeEach(() => {
    geoGefetConfigModule = new GeoGefetConfigModule();
  });

  it('should create an instance', () => {
    expect(geoGefetConfigModule).toBeTruthy();
  });
});
