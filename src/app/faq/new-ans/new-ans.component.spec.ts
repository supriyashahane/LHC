import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAnsComponent } from './new-ans.component';

describe('NewAnsComponent', () => {
  let component: NewAnsComponent;
  let fixture: ComponentFixture<NewAnsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NewAnsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewAnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
