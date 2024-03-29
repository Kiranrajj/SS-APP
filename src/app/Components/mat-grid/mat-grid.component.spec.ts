import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatGridComponent } from './mat-grid.component';

describe('MatGridComponent', () => {
  let component: MatGridComponent;
  let fixture: ComponentFixture<MatGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MatGridComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MatGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
