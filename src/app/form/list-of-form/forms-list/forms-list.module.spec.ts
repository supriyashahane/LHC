import { FormsListModule } from './forms-list.module';

describe('FormsListModule', () => {
  let formsListModule: FormsListModule;

  beforeEach(() => {
    formsListModule = new FormsListModule();
  });

  it('should create an instance', () => {
    expect(formsListModule).toBeTruthy();
  });
});
