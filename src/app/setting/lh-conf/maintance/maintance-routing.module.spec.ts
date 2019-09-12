import { MaintanceRoutingModule } from './maintance-routing.module';

describe('MaintanceRoutingModule', () => {
  let maintanceRoutingModule: MaintanceRoutingModule;

  beforeEach(() => {
    maintanceRoutingModule = new MaintanceRoutingModule();
  });

  it('should create an instance', () => {
    expect(maintanceRoutingModule).toBeTruthy();
  });
});
