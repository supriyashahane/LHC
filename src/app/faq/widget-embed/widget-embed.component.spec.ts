import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetEmbedComponent } from './widget-embed.component';

describe('WidgetEmbedComponent', () => {
  let component: WidgetEmbedComponent;
  let fixture: ComponentFixture<WidgetEmbedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WidgetEmbedComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetEmbedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
