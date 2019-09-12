import { DepartmentLimitGroupModule } from './department-limit-group.module';

describe('DepartmentLimitGroupModule', () => {
  let departmentLimitGroupModule: DepartmentLimitGroupModule;

  beforeEach(() => {
    departmentLimitGroupModule = new DepartmentLimitGroupModule();
  });

  it('should create an instance', () => {
    expect(departmentLimitGroupModule).toBeTruthy();
  });
});
