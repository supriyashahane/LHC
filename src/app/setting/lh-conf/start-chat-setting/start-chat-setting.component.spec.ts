import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartChatSettingComponent } from './start-chat-setting.component';

describe('StartChatSettingComponent', () => {
  let component: StartChatSettingComponent;
  let fixture: ComponentFixture<StartChatSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StartChatSettingComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartChatSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
