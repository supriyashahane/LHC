import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentLimitGroupComponent } from './department-limit-group.component';

describe('DepartmentLimitGroupComponent', () => {
  let component: DepartmentLimitGroupComponent;
  let fixture: ComponentFixture<DepartmentLimitGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DepartmentLimitGroupComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentLimitGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
