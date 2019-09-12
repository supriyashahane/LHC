import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LhcPageEmbedCodeComponent } from './lhc-page-embed-code.component';

describe('LhcPageEmbedCodeComponent', () => {
  let component: LhcPageEmbedCodeComponent;
  let fixture: ComponentFixture<LhcPageEmbedCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LhcPageEmbedCodeComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LhcPageEmbedCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
