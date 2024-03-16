import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeGlassesComponent } from './change-glasses.component';

describe('ChangeGlassesComponent', () => {
  let component: ChangeGlassesComponent;
  let fixture: ComponentFixture<ChangeGlassesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeGlassesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeGlassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
