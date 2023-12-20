import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkPromoteComponent } from './bulk-promote.component';

describe('BulkPromoteComponent', () => {
  let component: BulkPromoteComponent;
  let fixture: ComponentFixture<BulkPromoteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BulkPromoteComponent]
    });
    fixture = TestBed.createComponent(BulkPromoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
