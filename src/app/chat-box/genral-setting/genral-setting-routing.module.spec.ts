import { GenralSettingRoutingModule } from './genral-setting-routing.module';

describe('GenralSettingRoutingModule', () => {
  let genralSettingRoutingModule: GenralSettingRoutingModule;

  beforeEach(() => {
    genralSettingRoutingModule = new GenralSettingRoutingModule();
  });

  it('should create an instance', () => {
    expect(genralSettingRoutingModule).toBeTruthy();
  });
});
