import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelevisionshowsComponent } from './televisionshows.component';

describe('TelevisionshowsComponent', () => {
  let component: TelevisionshowsComponent;
  let fixture: ComponentFixture<TelevisionshowsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelevisionshowsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelevisionshowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
