import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportThemeComponent } from './import-theme.component';

describe('ImportThemeComponent', () => {
  let component: ImportThemeComponent;
  let fixture: ComponentFixture<ImportThemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ImportThemeComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
