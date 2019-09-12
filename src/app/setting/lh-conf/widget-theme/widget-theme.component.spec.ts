import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetThemeComponent } from './widget-theme.component';

describe('WidgetThemeComponent', () => {
  let component: WidgetThemeComponent;
  let fixture: ComponentFixture<WidgetThemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WidgetThemeComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
