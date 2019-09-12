import { ListOfRolesRoutingModule } from './list-of-roles-routing.module';

describe('ListOfRolesRoutingModule', () => {
  let listOfRolesRoutingModule: ListOfRolesRoutingModule;

  beforeEach(() => {
    listOfRolesRoutingModule = new ListOfRolesRoutingModule();
  });

  it('should create an instance', () => {
    expect(listOfRolesRoutingModule).toBeTruthy();
  });
});
