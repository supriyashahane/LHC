import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewLanguagesComponent } from './new-languages.component';

describe('NewLanguagesComponent', () => {
  let component: NewLanguagesComponent;
  let fixture: ComponentFixture<NewLanguagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NewLanguagesComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewLanguagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
