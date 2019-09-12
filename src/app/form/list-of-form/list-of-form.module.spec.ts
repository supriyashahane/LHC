import { ListOfFormModule } from './list-of-form.module';

describe('ListOfFormModule', () => {
  let listOfFormModule: ListOfFormModule;

  beforeEach(() => {
    listOfFormModule = new ListOfFormModule();
  });

  it('should create an instance', () => {
    expect(listOfFormModule).toBeTruthy();
  });
});
