import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CleanCacheComponent } from './clean-cache.component';

describe('CleanCacheComponent', () => {
  let component: CleanCacheComponent;
  let fixture: ComponentFixture<CleanCacheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CleanCacheComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CleanCacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
