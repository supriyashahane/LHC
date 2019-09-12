import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LhcWidgetEmbedCodeComponent } from './lhc-widget-embed-code.component';

describe('LhcWidgetEmbedCodeComponent', () => {
  let component: LhcWidgetEmbedCodeComponent;
  let fixture: ComponentFixture<LhcWidgetEmbedCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LhcWidgetEmbedCodeComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LhcWidgetEmbedCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
