import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StainRemoverComponent } from './stain-remover.component';

describe('StainRemoverComponent', () => {
  let component: StainRemoverComponent;
  let fixture: ComponentFixture<StainRemoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StainRemoverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StainRemoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
