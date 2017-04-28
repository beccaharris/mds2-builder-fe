import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PvdmHeaderComponent } from './pvdm-header.component';

describe('PvdmHeaderComponent', () => {
  let component: PvdmHeaderComponent;
  let fixture: ComponentFixture<PvdmHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PvdmHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PvdmHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
