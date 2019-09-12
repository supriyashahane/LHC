import { DepartmentRoutingModule } from './department-routing.module';

describe('DepartmentRoutingModule', () => {
  let departmentRoutingModule: DepartmentRoutingModule;

  beforeEach(() => {
    departmentRoutingModule = new DepartmentRoutingModule();
  });

  it('should create an instance', () => {
    expect(departmentRoutingModule).toBeTruthy();
  });
});
