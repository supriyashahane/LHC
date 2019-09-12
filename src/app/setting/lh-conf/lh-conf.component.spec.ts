import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LhConfComponent } from './lh-conf.component';

describe('LhConfComponent', () => {
  let component: LhConfComponent;
  let fixture: ComponentFixture<LhConfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LhConfComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LhConfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
