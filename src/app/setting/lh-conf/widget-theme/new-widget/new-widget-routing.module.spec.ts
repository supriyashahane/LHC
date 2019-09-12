import { NewWidgetRoutingModule } from './new-widget-routing.module';

describe('NewWidgetRoutingModule', () => {
  let newWidgetRoutingModule: NewWidgetRoutingModule;

  beforeEach(() => {
    newWidgetRoutingModule = new NewWidgetRoutingModule();
  });

  it('should create an instance', () => {
    expect(newWidgetRoutingModule).toBeTruthy();
  });
});
