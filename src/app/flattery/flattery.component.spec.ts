import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlatteryComponent } from './flattery.component';

describe('FlatteryComponent', () => {
  let component: FlatteryComponent;
  let fixture: ComponentFixture<FlatteryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlatteryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlatteryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
