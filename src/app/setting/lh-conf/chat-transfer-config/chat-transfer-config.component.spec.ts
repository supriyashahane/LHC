import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatTransferConfigComponent } from './chat-transfer-config.component';

describe('ChatTransferConfigComponent', () => {
  let component: ChatTransferConfigComponent;
  let fixture: ComponentFixture<ChatTransferConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ChatTransferConfigComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatTransferConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
