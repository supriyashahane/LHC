import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewInvComponent } from './new-inv.component';

describe('NewInvComponent', () => {
  let component: NewInvComponent;
  let fixture: ComponentFixture<NewInvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NewInvComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewInvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
