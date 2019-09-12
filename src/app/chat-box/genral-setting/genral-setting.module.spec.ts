import { GenralSettingModule } from './genral-setting.module';

describe('GenralSettingModule', () => {
  let genralSettingModule: GenralSettingModule;

  beforeEach(() => {
    genralSettingModule = new GenralSettingModule();
  });

  it('should create an instance', () => {
    expect(genralSettingModule).toBeTruthy();
  });
});
