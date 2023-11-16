import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedFormationComponent } from './selected-formation.component';

describe('SelectedFormationComponent', () => {
  let component: SelectedFormationComponent;
  let fixture: ComponentFixture<SelectedFormationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectedFormationComponent]
    });
    fixture = TestBed.createComponent(SelectedFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
