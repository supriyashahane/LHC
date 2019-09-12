import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeoAdjustComponent } from './geo-adjust.component';

describe('GeoAdjustComponent', () => {
  let component: GeoAdjustComponent;
  let fixture: ComponentFixture<GeoAdjustComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GeoAdjustComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeoAdjustComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
