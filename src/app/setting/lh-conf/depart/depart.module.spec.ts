import { DepartModule } from './depart.module';

describe('DepartModule', () => {
  let departModule: DepartModule;

  beforeEach(() => {
    departModule = new DepartModule();
  });

  it('should create an instance', () => {
    expect(departModule).toBeTruthy();
  });
});
