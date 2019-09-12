import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfFormComponent } from './list-of-form.component';

describe('ListOfFormComponent', () => {
  let component: ListOfFormComponent;
  let fixture: ComponentFixture<ListOfFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListOfFormComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
