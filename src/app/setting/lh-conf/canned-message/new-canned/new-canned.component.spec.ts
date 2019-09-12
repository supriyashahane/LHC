import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCannedComponent } from './new-canned.component';

describe('NewCannedComponent', () => {
  let component: NewCannedComponent;
  let fixture: ComponentFixture<NewCannedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NewCannedComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCannedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
