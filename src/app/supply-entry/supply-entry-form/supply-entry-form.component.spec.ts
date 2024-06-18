import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplyEntryFormComponent } from './supply-entry-form.component';

describe('SupplyEntryFormComponent', () => {
  let component: SupplyEntryFormComponent;
  let fixture: ComponentFixture<SupplyEntryFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SupplyEntryFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SupplyEntryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
