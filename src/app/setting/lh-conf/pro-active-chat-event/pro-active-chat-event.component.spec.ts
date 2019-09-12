import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProActiveChatEventComponent } from './pro-active-chat-event.component';

describe('ProActiveChatEventComponent', () => {
  let component: ProActiveChatEventComponent;
  let fixture: ComponentFixture<ProActiveChatEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProActiveChatEventComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProActiveChatEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
