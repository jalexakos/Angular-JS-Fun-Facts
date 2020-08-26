import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapFunctionComponent } from './map-function.component';

describe('MapFunctionComponent', () => {
  let component: MapFunctionComponent;
  let fixture: ComponentFixture<MapFunctionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapFunctionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapFunctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
