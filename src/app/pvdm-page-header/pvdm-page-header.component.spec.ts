import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PvdmPageHeaderComponent } from './pvdm-page-header.component';

describe('PvdmPageHeaderComponent', () => {
  let component: PvdmPageHeaderComponent;
  let fixture: ComponentFixture<PvdmPageHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PvdmPageHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PvdmPageHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
