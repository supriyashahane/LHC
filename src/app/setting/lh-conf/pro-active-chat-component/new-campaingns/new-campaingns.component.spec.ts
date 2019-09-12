import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCampaingnsComponent } from './new-campaingns.component';

describe('NewCampaingnsComponent', () => {
  let component: NewCampaingnsComponent;
  let fixture: ComponentFixture<NewCampaingnsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NewCampaingnsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCampaingnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
