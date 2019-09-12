import { ListOfRolesModule } from './list-of-roles.module';

describe('ListOfRolesModule', () => {
  let listOfRolesModule: ListOfRolesModule;

  beforeEach(() => {
    listOfRolesModule = new ListOfRolesModule();
  });

  it('should create an instance', () => {
    expect(listOfRolesModule).toBeTruthy();
  });
});
