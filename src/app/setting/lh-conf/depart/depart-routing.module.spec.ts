import { DepartRoutingModule } from './depart-routing.module';

describe('DepartRoutingModule', () => {
  let departRoutingModule: DepartRoutingModule;

  beforeEach(() => {
    departRoutingModule = new DepartRoutingModule();
  });

  it('should create an instance', () => {
    expect(departRoutingModule).toBeTruthy();
  });
});
