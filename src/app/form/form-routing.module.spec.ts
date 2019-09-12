import { FormRoutingModule } from './form-routing.module';

describe('FormRoutingModule', () => {
  let formRoutingModule: FormRoutingModule;

  beforeEach(() => {
    formRoutingModule = new FormRoutingModule();
  });

  it('should create an instance', () => {
    expect(formRoutingModule).toBeTruthy();
  });
});
