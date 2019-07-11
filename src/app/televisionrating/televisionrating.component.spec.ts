import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelevisionratingComponent } from './televisionrating.component';

describe('TelevisionratingComponent', () => {
  let component: TelevisionratingComponent;
  let fixture: ComponentFixture<TelevisionratingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelevisionratingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelevisionratingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
