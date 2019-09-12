import { DefaultSettingRoutingModule } from './default-setting-routing.module';

describe('DefaultSettingRoutingModule', () => {
  let defaultSettingRoutingModule: DefaultSettingRoutingModule;

  beforeEach(() => {
    defaultSettingRoutingModule = new DefaultSettingRoutingModule();
  });

  it('should create an instance', () => {
    expect(defaultSettingRoutingModule).toBeTruthy();
  });
});
