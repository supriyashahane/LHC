import { NewQueModule } from './new-que.module';

describe('NewQueModule', () => {
  let newQueModule: NewQueModule;

  beforeEach(() => {
    newQueModule = new NewQueModule();
  });

  it('should create an instance', () => {
    expect(newQueModule).toBeTruthy();
  });
});
