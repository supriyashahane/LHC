import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatTabInfoComponent } from './chat-tab-info.component';

describe('ChatTabInfoComponent', () => {
  let component: ChatTabInfoComponent;
  let fixture: ComponentFixture<ChatTabInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ChatTabInfoComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatTabInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
