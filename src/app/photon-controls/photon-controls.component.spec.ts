import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotonControlsComponent } from './photon-controls.component';

describe('PhotonControlsComponent', () => {
  let component: PhotonControlsComponent;
  let fixture: ComponentFixture<PhotonControlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotonControlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotonControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
