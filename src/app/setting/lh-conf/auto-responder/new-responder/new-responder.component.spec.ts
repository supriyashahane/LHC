import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewResponderComponent } from './new-responder.component';

describe('NewResponderComponent', () => {
  let component: NewResponderComponent;
  let fixture: ComponentFixture<NewResponderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NewResponderComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewResponderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
