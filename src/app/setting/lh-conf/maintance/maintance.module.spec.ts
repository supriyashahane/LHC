import { MaintanceModule } from './maintance.module';

describe('MaintanceModule', () => {
  let maintanceModule: MaintanceModule;

  beforeEach(() => {
    maintanceModule = new MaintanceModule();
  });

  it('should create an instance', () => {
    expect(maintanceModule).toBeTruthy();
  });
});
