import { NewProductRoutingModule } from './new-product-routing.module';

describe('NewProductRoutingModule', () => {
  let newProductRoutingModule: NewProductRoutingModule;

  beforeEach(() => {
    newProductRoutingModule = new NewProductRoutingModule();
  });

  it('should create an instance', () => {
    expect(newProductRoutingModule).toBeTruthy();
  });
});
