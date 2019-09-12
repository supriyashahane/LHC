import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListStartchatSettingComponent } from './list-startchat-setting.component';

describe('ListStartchatSettingComponent', () => {
  let component: ListStartchatSettingComponent;
  let fixture: ComponentFixture<ListStartchatSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListStartchatSettingComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListStartchatSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
