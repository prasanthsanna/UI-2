import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatformDetailsComponent } from './platform-details.component';

describe('PlatformDetailsComponent', () => {
  let component: PlatformDetailsComponent;
  let fixture: ComponentFixture<PlatformDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlatformDetailsComponent]
    });
    fixture = TestBed.createComponent(PlatformDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
