import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultAdminThemeComponent } from './default-admin-theme.component';

describe('DefaultAdminThemeComponent', () => {
  let component: DefaultAdminThemeComponent;
  let fixture: ComponentFixture<DefaultAdminThemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DefaultAdminThemeComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultAdminThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
