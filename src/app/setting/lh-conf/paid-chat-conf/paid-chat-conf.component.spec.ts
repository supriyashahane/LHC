import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaidChatConfComponent } from './paid-chat-conf.component';

describe('PaidChatConfComponent', () => {
  let component: PaidChatConfComponent;
  let fixture: ComponentFixture<PaidChatConfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PaidChatConfComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaidChatConfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
