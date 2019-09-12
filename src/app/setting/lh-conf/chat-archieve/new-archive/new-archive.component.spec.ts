import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewArchiveComponent } from './new-archive.component';

describe('NewArchiveComponent', () => {
  let component: NewArchiveComponent;
  let fixture: ComponentFixture<NewArchiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NewArchiveComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewArchiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
