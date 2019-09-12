import { UpdateInfoRoutingModule } from './update-info-routing.module';

describe('UpdateInfoRoutingModule', () => {
  let updateInfoRoutingModule: UpdateInfoRoutingModule;

  beforeEach(() => {
    updateInfoRoutingModule = new UpdateInfoRoutingModule();
  });

  it('should create an instance', () => {
    expect(updateInfoRoutingModule).toBeTruthy();
  });
});
