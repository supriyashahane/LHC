import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageEmbedCodeComponent } from './page-embed-code.component';

describe('PageEmbedCodeComponent', () => {
  let component: PageEmbedCodeComponent;
  let fixture: ComponentFixture<PageEmbedCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PageEmbedCodeComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageEmbedCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
