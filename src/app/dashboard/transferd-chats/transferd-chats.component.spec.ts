import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferdChatsComponent } from './transferd-chats.component';

describe('TransferdChatsComponent', () => {
  let component: TransferdChatsComponent;
  let fixture: ComponentFixture<TransferdChatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TransferdChatsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferdChatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
