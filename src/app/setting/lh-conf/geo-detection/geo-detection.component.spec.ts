import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeoDetectionComponent } from './geo-detection.component';

describe('GeoDetectionComponent', () => {
  let component: GeoDetectionComponent;
  let fixture: ComponentFixture<GeoDetectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GeoDetectionComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeoDetectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
