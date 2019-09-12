import { ListOfGroupRoutingModule } from './list-of-group-routing.module';

describe('ListOfGroupRoutingModule', () => {
  let listOfGroupRoutingModule: ListOfGroupRoutingModule;

  beforeEach(() => {
    listOfGroupRoutingModule = new ListOfGroupRoutingModule();
  });

  it('should create an instance', () => {
    expect(listOfGroupRoutingModule).toBeTruthy();
  });
});
