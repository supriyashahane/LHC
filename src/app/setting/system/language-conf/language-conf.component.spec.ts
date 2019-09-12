import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageConfComponent } from './language-conf.component';

describe('LanguageConfComponent', () => {
  let component: LanguageConfComponent;
  let fixture: ComponentFixture<LanguageConfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LanguageConfComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguageConfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
