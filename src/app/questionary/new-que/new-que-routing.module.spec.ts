import { NewQueRoutingModule } from './new-que-routing.module';

describe('NewQueRoutingModule', () => {
  let newQueRoutingModule: NewQueRoutingModule;

  beforeEach(() => {
    newQueRoutingModule = new NewQueRoutingModule();
  });

  it('should create an instance', () => {
    expect(newQueRoutingModule).toBeTruthy();
  });
});
