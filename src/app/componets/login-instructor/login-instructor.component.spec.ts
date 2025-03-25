import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginInstructorComponent } from './login-instructor.component';

describe('LoginInstructorComponent', () => {
  let component: LoginInstructorComponent;
  let fixture: ComponentFixture<LoginInstructorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginInstructorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginInstructorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
