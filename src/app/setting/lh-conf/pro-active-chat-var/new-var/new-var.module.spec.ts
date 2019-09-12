import { NewVarModule } from './new-var.module';

describe('NewVarModule', () => {
  let newVarModule: NewVarModule;

  beforeEach(() => {
    newVarModule = new NewVarModule();
  });

  it('should create an instance', () => {
    expect(newVarModule).toBeTruthy();
  });
});
