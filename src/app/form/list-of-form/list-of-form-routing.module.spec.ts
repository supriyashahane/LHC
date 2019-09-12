import { ListOfFormRoutingModule } from './list-of-form-routing.module';

describe('ListOfFormRoutingModule', () => {
  let listOfFormRoutingModule: ListOfFormRoutingModule;

  beforeEach(() => {
    listOfFormRoutingModule = new ListOfFormRoutingModule();
  });

  it('should create an instance', () => {
    expect(listOfFormRoutingModule).toBeTruthy();
  });
});
