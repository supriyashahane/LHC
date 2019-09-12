import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProActiveChatComponentComponent } from './pro-active-chat-component.component';

describe('ProActiveChatComponentComponent', () => {
  let component: ProActiveChatComponentComponent;
  let fixture: ComponentFixture<ProActiveChatComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProActiveChatComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProActiveChatComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
