import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDialectsComponent } from './new-dialects.component';

describe('NewDialectsComponent', () => {
  let component: NewDialectsComponent;
  let fixture: ComponentFixture<NewDialectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NewDialectsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewDialectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
