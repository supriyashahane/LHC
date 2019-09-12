import { ListOfGroupModule } from './list-of-group.module';

describe('ListOfGroupModule', () => {
  let listOfGroupModule: ListOfGroupModule;

  beforeEach(() => {
    listOfGroupModule = new ListOfGroupModule();
  });

  it('should create an instance', () => {
    expect(listOfGroupModule).toBeTruthy();
  });
});
