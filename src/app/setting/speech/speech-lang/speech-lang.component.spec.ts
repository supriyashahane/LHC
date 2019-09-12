import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeechLangComponent } from './speech-lang.component';

describe('SpeechLangComponent', () => {
  let component: SpeechLangComponent;
  let fixture: ComponentFixture<SpeechLangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SpeechLangComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeechLangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
