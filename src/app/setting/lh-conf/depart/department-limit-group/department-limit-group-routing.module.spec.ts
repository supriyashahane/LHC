import { DepartmentLimitGroupRoutingModule } from './department-limit-group-routing.module';

describe('DepartmentLimitGroupRoutingModule', () => {
  let departmentLimitGroupRoutingModule: DepartmentLimitGroupRoutingModule;

  beforeEach(() => {
    departmentLimitGroupRoutingModule = new DepartmentLimitGroupRoutingModule();
  });

  it('should create an instance', () => {
    expect(departmentLimitGroupRoutingModule).toBeTruthy();
  });
});
