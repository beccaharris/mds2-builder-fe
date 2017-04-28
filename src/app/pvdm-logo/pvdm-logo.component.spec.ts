import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PvdmLogoComponent } from './pvdm-logo.component';

describe('PvdmLogoComponent', () => {
  let component: PvdmLogoComponent;
  let fixture: ComponentFixture<PvdmLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PvdmLogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PvdmLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
