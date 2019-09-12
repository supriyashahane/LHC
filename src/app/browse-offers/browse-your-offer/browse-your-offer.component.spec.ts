import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseYourOfferComponent } from './browse-your-offer.component';

describe('BrowseYourOfferComponent', () => {
  let component: BrowseYourOfferComponent;
  let fixture: ComponentFixture<BrowseYourOfferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BrowseYourOfferComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowseYourOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
