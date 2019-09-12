import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EMailTemplateComponent } from './e-mail-template.component';

describe('EMailTemplateComponent', () => {
  let component: EMailTemplateComponent;
  let fixture: ComponentFixture<EMailTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EMailTemplateComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EMailTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
