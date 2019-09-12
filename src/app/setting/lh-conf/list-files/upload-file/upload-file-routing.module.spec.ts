import { UploadFileRoutingModule } from './upload-file-routing.module';

describe('UploadFileRoutingModule', () => {
  let uploadFileRoutingModule: UploadFileRoutingModule;

  beforeEach(() => {
    uploadFileRoutingModule = new UploadFileRoutingModule();
  });

  it('should create an instance', () => {
    expect(uploadFileRoutingModule).toBeTruthy();
  });
});
