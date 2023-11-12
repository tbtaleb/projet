import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginDivComponent } from './login-div.component';

describe('LoginDivComponent', () => {
  let component: LoginDivComponent;
  let fixture: ComponentFixture<LoginDivComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginDivComponent]
    });
    fixture = TestBed.createComponent(LoginDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
