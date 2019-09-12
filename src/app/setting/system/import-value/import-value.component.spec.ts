import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportValueComponent } from './import-value.component';

describe('ImportValueComponent', () => {
  let component: ImportValueComponent;
  let fixture: ComponentFixture<ImportValueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ImportValueComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
