import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewQueComponent } from './new-que.component';

describe('NewQueComponent', () => {
  let component: NewQueComponent;
  let fixture: ComponentFixture<NewQueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NewQueComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewQueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
