import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewVarComponent } from './new-var.component';

describe('NewVarComponent', () => {
  let component: NewVarComponent;
  let fixture: ComponentFixture<NewVarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NewVarComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewVarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
