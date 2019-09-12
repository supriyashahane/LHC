import { DepartmentGroupModule } from './department-group.module';

describe('DepartmentGroupModule', () => {
  let departmentGroupModule: DepartmentGroupModule;

  beforeEach(() => {
    departmentGroupModule = new DepartmentGroupModule();
  });

  it('should create an instance', () => {
    expect(departmentGroupModule).toBeTruthy();
  });
});
