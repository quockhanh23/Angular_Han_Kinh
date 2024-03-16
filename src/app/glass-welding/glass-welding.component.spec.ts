import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlassWeldingComponent } from './glass-welding.component';

describe('GlassWeldingComponent', () => {
  let component: GlassWeldingComponent;
  let fixture: ComponentFixture<GlassWeldingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlassWeldingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlassWeldingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
