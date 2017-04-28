import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PvdmNavIconComponent } from './pvdm-nav-icon.component';

describe('PvdmNavIconComponent', () => {
  let component: PvdmNavIconComponent;
  let fixture: ComponentFixture<PvdmNavIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PvdmNavIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PvdmNavIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
