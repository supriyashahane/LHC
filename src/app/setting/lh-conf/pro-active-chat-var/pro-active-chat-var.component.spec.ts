import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProActiveChatVarComponent } from './pro-active-chat-var.component';

describe('ProActiveChatVarComponent', () => {
  let component: ProActiveChatVarComponent;
  let fixture: ComponentFixture<ProActiveChatVarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProActiveChatVarComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProActiveChatVarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
