import { DepartmentGroupRoutingModule } from './department-group-routing.module';

describe('DepartmentGroupRoutingModule', () => {
  let departmentGroupRoutingModule: DepartmentGroupRoutingModule;

  beforeEach(() => {
    departmentGroupRoutingModule = new DepartmentGroupRoutingModule();
  });

  it('should create an instance', () => {
    expect(departmentGroupRoutingModule).toBeTruthy();
  });
});
