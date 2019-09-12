import { NewProductModule } from './new-product.module';

describe('NewProductModule', () => {
  let newProductModule: NewProductModule;

  beforeEach(() => {
    newProductModule = new NewProductModule();
  });

  it('should create an instance', () => {
    expect(newProductModule).toBeTruthy();
  });
});
