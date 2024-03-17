import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplyEntryComponent } from './supply-entry.component';

describe('SupplyEntryComponent', () => {
  let component: SupplyEntryComponent;
  let fixture: ComponentFixture<SupplyEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SupplyEntryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SupplyEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
