import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseOfferInvComponent } from './browse-offer-inv.component';

describe('BrowseOfferInvComponent', () => {
  let component: BrowseOfferInvComponent;
  let fixture: ComponentFixture<BrowseOfferInvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BrowseOfferInvComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowseOfferInvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
