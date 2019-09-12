import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewListchatComponent } from './new-listchat.component';

describe('NewListchatComponent', () => {
  let component: NewListchatComponent;
  let fixture: ComponentFixture<NewListchatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NewListchatComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewListchatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
