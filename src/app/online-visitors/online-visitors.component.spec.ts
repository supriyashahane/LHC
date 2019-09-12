import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineVisitorsComponent } from './online-visitors.component';

describe('OnlineVisitorsComponent', () => {
  let component: OnlineVisitorsComponent;
  let fixture: ComponentFixture<OnlineVisitorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OnlineVisitorsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineVisitorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
