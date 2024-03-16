import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlassPolishingComponent } from './glass-polishing.component';

describe('GlassPolishingComponent', () => {
  let component: GlassPolishingComponent;
  let fixture: ComponentFixture<GlassPolishingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlassPolishingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlassPolishingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
