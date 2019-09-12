import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingChatTabComponent } from './pending-chat-tab.component';

describe('PendingChatTabComponent', () => {
  let component: PendingChatTabComponent;
  let fixture: ComponentFixture<PendingChatTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PendingChatTabComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingChatTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
