import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmbedCodeComponent } from './embed-code.component';

describe('EmbedCodeComponent', () => {
  let component: EmbedCodeComponent;
  let fixture: ComponentFixture<EmbedCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EmbedCodeComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmbedCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
