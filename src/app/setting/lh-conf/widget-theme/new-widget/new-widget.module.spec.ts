import { NewWidgetModule } from './new-widget.module';

describe('NewWidgetModule', () => {
  let newWidgetModule: NewWidgetModule;

  beforeEach(() => {
    newWidgetModule = new NewWidgetModule();
  });

  it('should create an instance', () => {
    expect(newWidgetModule).toBeTruthy();
  });
});
