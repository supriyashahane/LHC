import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatArchieveComponent } from './chat-archieve.component';

describe('ChatArchieveComponent', () => {
  let component: ChatArchieveComponent;
  let fixture: ComponentFixture<ChatArchieveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ChatArchieveComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatArchieveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
