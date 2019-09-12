import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewLimitComponent } from './new-limit.component';

describe('NewLimitComponent', () => {
  let component: NewLimitComponent;
  let fixture: ComponentFixture<NewLimitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NewLimitComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewLimitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
