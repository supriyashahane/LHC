import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialectsComponent } from './dialects.component';

describe('DialectsComponent', () => {
  let component: DialectsComponent;
  let fixture: ComponentFixture<DialectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DialectsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
