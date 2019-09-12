import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProActiveChatInvComponent } from './pro-active-chat-inv.component';

describe('ProActiveChatInvComponent', () => {
  let component: ProActiveChatInvComponent;
  let fixture: ComponentFixture<ProActiveChatInvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProActiveChatInvComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProActiveChatInvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
