import { NewArchiveRoutingModule } from './new-archive-routing.module';

describe('NewArchiveRoutingModule', () => {
  let newArchiveRoutingModule: NewArchiveRoutingModule;

  beforeEach(() => {
    newArchiveRoutingModule = new NewArchiveRoutingModule();
  });

  it('should create an instance', () => {
    expect(newArchiveRoutingModule).toBeTruthy();
  });
});
