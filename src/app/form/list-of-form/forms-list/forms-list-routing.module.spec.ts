import { FormsListRoutingModule } from './forms-list-routing.module';

describe('FormsListRoutingModule', () => {
  let formsListRoutingModule: FormsListRoutingModule;

  beforeEach(() => {
    formsListRoutingModule = new FormsListRoutingModule();
  });

  it('should create an instance', () => {
    expect(formsListRoutingModule).toBeTruthy();
  });
});
