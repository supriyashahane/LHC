import { DefaultSettingModule } from './default-setting.module';

describe('DefaultSettingModule', () => {
  let defaultSettingModule: DefaultSettingModule;

  beforeEach(() => {
    defaultSettingModule = new DefaultSettingModule();
  });

  it('should create an instance', () => {
    expect(defaultSettingModule).toBeTruthy();
  });
});
