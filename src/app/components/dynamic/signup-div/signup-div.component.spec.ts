import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupDivComponent } from './signup-div.component';

describe('SignupDivComponent', () => {
  let component: SignupDivComponent;
  let fixture: ComponentFixture<SignupDivComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignupDivComponent]
    });
    fixture = TestBed.createComponent(SignupDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
